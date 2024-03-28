import {useEffect, useState} from 'react';
import debounce from '../../utils/debounce';
import {useAppDispatch, useAppSelector} from '../../store/hooks/redux';
import {fetchNews} from '../../store/reducers/ActionCreators';
import Dropdown from '../../ui-kit/Dropdown';
import {categories, sources} from '../../mocks/filters';
import {IDropdownItem} from '../../ui-kit/Dropdown/types';
import Button from '../../ui-kit/Button';
import {
  getFiltersSelector,
  setCategoryObject,
  setFiltersParams,
  setSearchTerm,
  setSourceObject,
} from '../../store/reducers/FiltersSlice';
import Field from '../Search';

const Filters = () => {
  const [filterDebounceTimer] = useState<number>(700);
  const [saved, setSaved] = useState<boolean>(false);
  const {categoryObject, sourceObject, searchTerm} =
    useAppSelector(getFiltersSelector);
  const [category, setCategory] = useState<IDropdownItem | Record<string, any>>(
    categoryObject,
  );
  const [source, setSource] = useState<IDropdownItem | Record<string, any>>(
    sourceObject,
  );
  const [search, setSearch] = useState<string>(searchTerm);
  const [params, setParams] = useState({});

  const dispatch = useAppDispatch();

  const handleSearch = (inputValue: string) => {
    handleSearchDebounce(inputValue);
  };

  const handleSearchDebounce = debounce((inputValue: string) => {
    setParams({
      ...params,
      search: inputValue,
    });
    setSearch(inputValue);
  }, filterDebounceTimer);

  const handleCategoriesChange = debounce((category: IDropdownItem) => {
    setParams({
      ...params,
      category: category.value,
    });
    setCategory(category);
  }, filterDebounceTimer);

  const handleSourcesChange = debounce((source: IDropdownItem) => {
    setParams({
      ...params,
      source: source.value,
    });
    setSource(source);
  }, filterDebounceTimer);

  const handleSaveFilters = () => {
    setSaved(true);
    dispatch(setFiltersParams(params));
    search && dispatch(setSearchTerm(search));
    category && dispatch(setCategoryObject(category));
    source && dispatch(setSourceObject(source));
  };

  const handleClearFilters = () => {
    dispatch(setFiltersParams({}));
    setParams({});

    dispatch(setSearchTerm(''));

    dispatch(setCategoryObject({}));
    setCategory({});

    dispatch(setSourceObject({}));
    setSource({});

    dispatch(fetchNews({}));

    setSaved(false);
  };

  useEffect(() => {
    console.log('paramn', !!Object.keys(params).length);
    if (!!Object.keys(params).length) dispatch(fetchNews(params));
  }, [params]);

  return (
    <div className="w-full grid gap-md">
      <div className="flex w-full gap-md">
        <Field
          onChange={e => {
            handleSearch(e.target.value);
          }}
          value={searchTerm}
        />
        <Dropdown
          label="Select category"
          list={categories}
          value={category}
          onChange={handleCategoriesChange}
        />
        <Dropdown
          label="Select source"
          list={sources}
          value={source}
          onChange={handleSourcesChange}
        />
      </div>
      <div className="flex gap-sm items-center">
        <Button onClick={handleSaveFilters} primary>
          {saved ? 'Filters saved' : 'Save filters'}
        </Button>
        <Button onClick={handleClearFilters}>Clear filters</Button>
      </div>
    </div>
  );
};

export default Filters;

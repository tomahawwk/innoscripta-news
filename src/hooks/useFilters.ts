import {useState} from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks/redux';
import {fetchNews} from 'store/reducers/ActionCreators';
import {
  getFiltersSelector,
  setCategoryObject,
  setDateSortObject,
  setFiltersParams,
  setSearchTerm,
  setSourceObject,
} from 'store/reducers/FiltersSlice';
import {IDropdownItem} from 'ui-kit/Dropdown/types';
import debounce from 'utils/debounce';

export const useFilters = () => {
  const [filterDebounceTimer] = useState<number>(700);

  const {categoryObject, sourceObject, searchTerm, dateSortObject} =
    useAppSelector(getFiltersSelector);
  const [category, setCategory] = useState<IDropdownItem | Record<string, any>>(
    categoryObject,
  );
  const [dateSort, setDateSort] = useState<IDropdownItem | Record<string, any>>(
    dateSortObject,
  );
  const [source, setSource] = useState<IDropdownItem | Record<string, any>>(
    sourceObject,
  );
  const [search, setSearch] = useState<string>(searchTerm);
  const [params, setParams] = useState({});
  const dispatch = useAppDispatch();

  const handleSearch = debounce((inputValue: string) => {
    setParams({
      ...params,
      search: inputValue,
    });
    setSearch(inputValue);
  }, filterDebounceTimer);

  const handleDateSortChange = debounce((dateSort: IDropdownItem) => {
    setParams({
      ...params,
      dateSort: dateSort.value,
    });
    setDateSort(dateSort);
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
    dispatch(setFiltersParams(params));
    search && dispatch(setSearchTerm(search));
    dateSort && dispatch(setDateSortObject(dateSort));
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

    dispatch(setDateSortObject({}));
    setDateSort({});

    dispatch(fetchNews({}));
  };
  return {
    params,
    dateSort,
    category,
    source,
    searchTerm,
    handleSearch,
    handleDateSortChange,
    handleCategoriesChange,
    handleSourcesChange,
    handleClearFilters,
    handleSaveFilters,
  };
};

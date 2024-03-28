import {useEffect, useState} from 'react';
import {fetchNews} from '../../store/reducers/ActionCreators';
import Dropdown from '../../ui-kit/Dropdown';
import {categories, date, sources} from '../../mocks/filters';
import Button from '../../ui-kit/Button';
import Field from '../Search';
import FiltersModal from './modal';
import {useFilters} from 'hooks/useFilters';
import {useAppDispatch, useAppSelector} from 'store/hooks/redux';
import {getFiltersSelector} from 'store/reducers/FiltersSlice';

const Filters = () => {
  const [saved, setSaved] = useState<boolean>(false);
  const [openTouchFilters, setOpenTouchFilters] = useState<boolean>(false);
  const {searchTerm} = useAppSelector(getFiltersSelector);
  const {
    params,
    source,
    category,
    dateSort,
    handleSearch,
    handleCategoriesChange,
    handleSourcesChange,
    handleDateSortChange,
    handleSaveFilters,
    handleClearFilters,
  } = useFilters();
  const dispatch = useAppDispatch();

  const handleSave = () => {
    handleSaveFilters();
    setSaved(true);
  };

  const handleClear = () => {
    handleClearFilters();
    setSaved(false);
  };

  useEffect(() => {
    if (!!Object.keys(params).length) dispatch(fetchNews(params));
  }, [params]);

  return (
    <div className="w-full grid gap-md z-20">
      <div className="flex w-full gap-md items-center">
        <div className="animation-fade-y animation-delay-3 w-full">
          <Field
            onChange={e => {
              handleSearch(e.target.value);
            }}
            value={searchTerm}
          />
        </div>

        <div className="gap-md lg:flex hidden">
          <div className="animation-fade-y animation-delay-4">
            <Dropdown
              label="Select category"
              list={categories}
              value={category}
              onChange={handleCategoriesChange}
            />
          </div>
          <div className="animation-fade-y animation-delay-5">
            <Dropdown
              label="Select source"
              list={sources}
              value={source}
              onChange={handleSourcesChange}
            />
          </div>
          <div className="animation-fade-y animation-delay-6">
            <Dropdown
              label="Sort by date"
              list={date}
              value={dateSort}
              onChange={handleDateSortChange}
            />
          </div>
        </div>
        <button
          onClick={() => setOpenTouchFilters(true)}
          className="lg:hidden flex bg-primary-main w-[40px] min-w-[40px] h-[40px]
          animation-fade-y animation-delay-4 rounded-sm p-[8px]">
          <img className="rotate-90" src="/images/settings.svg" alt="filters" />
        </button>
      </div>
      <div className="gap-sm items-center lg:flex hidden">
        <div className="animation-fade-y animation-delay-4">
          <Button onClick={handleSave} primary>
            {saved ? 'Filters saved' : 'Save filters'}
          </Button>
        </div>
        <div className="animation-fade-y animation-delay-5">
          <Button onClick={handleClear}>Clear filters</Button>
        </div>
      </div>
      <FiltersModal open={openTouchFilters} setOpen={setOpenTouchFilters} />
    </div>
  );
};

export default Filters;

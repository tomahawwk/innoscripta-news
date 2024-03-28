import {FC} from 'react';
import {IFiltersModal} from '../types';
import Dialog from '@material-tailwind/react/components/Dialog';
import Dropdown from 'ui-kit/Dropdown';
import {categories, date, sources} from 'mocks/filters';
import {useAppDispatch} from 'store/hooks/redux';
import Button from 'ui-kit/Button';
import {useFilters} from 'hooks/useFilters';
import {fetchNews} from 'store/reducers/ActionCreators';

const FiltersModal: FC<IFiltersModal> = ({open, setOpen}) => {
  const {
    params,
    source,
    category,
    dateSort,
    handleCategoriesChange,
    handleSourcesChange,
    handleDateSortChange,
    handleSaveFilters,
    handleClearFilters,
  } = useFilters();
  const dispatch = useAppDispatch();

  const handleSetFilters = () => {
    if (!!Object.keys(params).length) dispatch(fetchNews(params));
    handleSaveFilters();
    setOpen(false);
  };

  const handleCloseFilters = () => {
    handleClearFilters();
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      handler={setOpen}
      placeholder="filters"
      className="bg-primary-lighter rounded-sm">
      <div className="grid p-sm gap-sm">
        <div className="font-medium text-[24px] text-black">Search filters</div>
        <div className="grid gap-sm">
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
          <Dropdown
            label="Sort by date"
            list={date}
            value={dateSort}
            onChange={handleDateSortChange}
          />
          <Button onClick={handleSetFilters} primary>
            Set filters
          </Button>
          <Button onClick={handleCloseFilters}>Clear filters</Button>
        </div>
      </div>
    </Dialog>
  );
};

export default FiltersModal;

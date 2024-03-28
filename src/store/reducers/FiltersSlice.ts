import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {IDropdownItem} from '@/ui-kit/Dropdown/types';

interface FiltersState {
  params: Record<string, any>;
  searchTerm: string;
  categoryObject: IDropdownItem | Record<string, any>;
  sourceObject: IDropdownItem | Record<string, any>;
}

const initialState: FiltersState = {
  params: {},
  categoryObject: {},
  sourceObject: {},
  searchTerm: '',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFiltersParams(state, action: PayloadAction<{}>) {
      state.params = action.payload;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setCategoryObject(
      state,
      action: PayloadAction<IDropdownItem | Record<string, any>>,
    ) {
      state.categoryObject = action.payload;
    },
    setSourceObject(
      state,
      action: PayloadAction<IDropdownItem | Record<string, any>>,
    ) {
      state.sourceObject = action.payload;
    },
  },
});

export const {
  setFiltersParams,
  setCategoryObject,
  setSourceObject,
  setSearchTerm,
} = filtersSlice.actions;

export const getFiltersSelector = (state: RootState) => state.filtersReducer;

export default filtersSlice.reducer;

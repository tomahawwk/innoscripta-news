import {combineReducers, configureStore} from '@reduxjs/toolkit';
import newsReducer from './reducers/NewsSlice';
import filtersReducer from './reducers/FiltersSlice';

const rootReducer = combineReducers({
  newsReducer,
  filtersReducer,
});

const savedState = localStorage.getItem('reduxState');
const preloadedState = savedState ? JSON.parse(savedState) : {};

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

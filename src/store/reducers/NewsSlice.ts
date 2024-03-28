import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IArticle} from '../models/IArticle';
import {fetchNews} from './ActionCreators';

interface NewsState {
  articles: any;
  isLoading: boolean;
}

const initialState: NewsState = {
  articles: [],
  isLoading: false,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        fetchNews.fulfilled.type,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.articles = action.payload;
        },
      )
      .addCase(fetchNews.pending.type, state => {
        state.isLoading = true;
      });
  },
});

export default newsSlice.reducer;

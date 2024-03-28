import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {nyTimes, worldNews, theNews} from '../../constants';
import {
  createNYParamsString,
  createWorldNewsParamsString,
  createTheNewsParamsString,
} from '../../utils/createParamsString';
import {INYArticle} from '../models/INYArticle';
import {IWorldNewsArticle} from '../models/IWorldNewsArticle';
import {ITheNewsArticle} from '../models/ITheNewsArticle';

export const fetchNews = createAsyncThunk(
  'news/fetchAll',
  async (params: Record<string, any>) => {
    const [nyTimesResponse, worldNewsResponse, theNewsResponse] =
      await Promise.all([
        axios.get(nyTimes.url + createNYParamsString(params)),
        axios.get(worldNews.url + createWorldNewsParamsString(params)),
        axios.get(theNews.url + createTheNewsParamsString(params)),
      ]);
    const nyTimesData: INYArticle[] = await nyTimesResponse.data.response.docs;
    const worldNewsData: IWorldNewsArticle[] =
      await worldNewsResponse.data.news;
    const theNewsData: ITheNewsArticle[] = await theNewsResponse.data.data;

    return {nyTimesData, worldNewsData, theNewsData};
  },
);

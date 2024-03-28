import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {nyTimes, gNews, theNews} from '../../constants';
import {
  createNYParamsString,
  createGNewsParamsString,
  createTheNewsParamsString,
} from '../../utils/createParamsString';
import {INYArticle} from '../models/INYArticle';
import {IGNewsArticle} from '../models/IGNewsArticle';
import {ITheNewsArticle} from '../models/ITheNewsArticle';

export const fetchNews = createAsyncThunk(
  'news/fetchAll',
  async (params: Record<string, any>) => {
    const [nyTimesResponse, gNewsResponse, theNewsResponse] = await Promise.all(
      [
        axios.get(nyTimes.url + createNYParamsString(params)),
        axios.get(gNews.url + createGNewsParamsString(params)),
        axios.get(theNews.url + createTheNewsParamsString(params)),
      ],
    );
    const nyTimesData: INYArticle[] = await nyTimesResponse.data.response.docs;

    const gNewsData: IGNewsArticle[] = await gNewsResponse.data.articles;

    const theNewsData: ITheNewsArticle[] = await theNewsResponse.data.data;

    return {nyTimesData, gNewsData, theNewsData};
  },
);

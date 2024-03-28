import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {nyTimes, newsApi, theNews} from '../../constants';
import {
  createNYParamsString,
  createNewsApiParamsString,
  createTheNewsParamsString,
} from '../../utils/createParamsString';
import {INYArticle} from '../models/INYArticle';
import {INewsApiArticle} from '../models/INewsApiArticle';
import {ITheNewsArticle} from '../models/ITheNewsArticle';

export const fetchNews = createAsyncThunk(
  'news/fetchAll',
  async (params: Record<string, any>) => {
    console.log('fetch');
    const [nyTimesResponse, newsApiResponse] = await Promise.all([
      axios.get(nyTimes.url + createNYParamsString(params)),
      axios.get(newsApi.url + createNewsApiParamsString(params)),
      //axios.get(theNews.url + createTheNewsParamsString(params)),
    ]);
    const nyTimesData: INYArticle[] = await nyTimesResponse.data.response.docs;
    const newsApiData: INewsApiArticle[] = await newsApiResponse.data.articles;
    //const theNewsData: ITheNewsArticle[] = await theNewsResponse.data.data;

    // console.log('nyTimesData', nyTimesData);
    // console.log('newsApiData', newsApiData);
    //console.log('theNewsData', theNewsData);

    return {nyTimesData, newsApiData};
  },
);

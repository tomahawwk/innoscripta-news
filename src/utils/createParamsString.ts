import {newsApi, nyTimes, theNews} from '../constants';

const createNYParamsString = (params: Record<string, any>) => {
  let result: string = '';

  result += `?api-key=${nyTimes.key}`;

  result += `&q=${params.search ? params.search : ' '}`;

  if (params.category || params.source) result += '&fq=';

  if (params.category) result += `news_desk:("${params.category}")`;

  if (params.source)
    result += `${params.category ? ' AND ' : ''}source:("${params.source}")`;

  return result;
};

const createNewsApiParamsString = (params: Record<string, any>) => {
  let result: string = '';

  result += `?pageSize=10&apiKey=${newsApi.key}&language=en`;

  result += `&q=${params.search ? params.search : ' '}`;

  if (params.category && !params.source)
    result += `&category=${params.category}`;

  if (params.source) result += `&sources=${params.source}`;

  return result;
};

const createTheNewsParamsString = (params: Record<string, any>) => {
  let result: string = '';

  result += `?api_token=${theNews.key}&language=en`;

  if (params.search) result += `&search=${params.search}`;

  if (params.category) result += `&categories=${params.category}`;

  if (params.source) result += `&source_ids=${params.source}`;

  return result;
};

export {
  createNYParamsString,
  createNewsApiParamsString,
  createTheNewsParamsString,
};

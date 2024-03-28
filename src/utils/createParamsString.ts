import {gNews, nyTimes, theNews} from '../constants';

const createNYParamsString = (params: Record<string, any>) => {
  let result: string = '';

  result += `?api-key=${nyTimes.key}`;

  result += `&q=${params.search ? params.search : ' '}`;

  if (params.category || params.source) result += '&fq=';

  if (params.category) result += `news_desk:("${params.category}")`;

  if (params.source)
    result += `${params.category ? ' AND ' : ''}source:("${params.source}")`;

  if (params.dateSort) result += `&sort=${params.dateSort}`;

  return result;
};

const createGNewsParamsString = (params: Record<string, any>) => {
  let result: string = '';

  result += `?apikey=${gNews.key}&lang=en`;

  result += `&q=${params.search ? params.search : 'a'}`;

  if (params.category) result += `&category=${params.category}`;

  if (params.source) result += `&from=2027-03-28T13:44:50Z`;

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
  createGNewsParamsString,
  createTheNewsParamsString,
};

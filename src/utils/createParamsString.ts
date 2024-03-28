import {worldNews, nyTimes, theNews} from '../constants';

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

const createWorldNewsParamsString = (params: Record<string, any>) => {
  let result: string = '';

  result += `/search-news?api-key=${worldNews.key}&language=en`;

  if (params.search) result += `&text=${params.search}`;

  if (params.category) result += `&authors=${params.category}`;

  if (params.source) result += `&news-sources=${params.source}`;

  // if (params.dateSort)
  //   result += `&sort=publish-time&sort-direction=${params.dateSort}`;    // response from api with this parameter is too long :(

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
  createWorldNewsParamsString,
  createTheNewsParamsString,
};

import {ITheNewsArticle} from '../store/models/ITheNewsArticle';
import {INYArticle} from '../store/models/INYArticle';
import {IGNewsArticle} from '../store/models/IGNewsArticle';
import {IArticle} from '../store/models/IArticle';
import {nyTimes} from '../constants';

const mergeArticles = ({
  nyTimesData,
  gNewsData,
  theNewsData,
}: {
  nyTimesData: INYArticle[];
  gNewsData: IGNewsArticle[];
  theNewsData: ITheNewsArticle[];
}) => {
  const mergedNews: IArticle[] = [];
  nyTimesData?.forEach((obj: INYArticle) => {
    mergedNews.push({
      title: obj.headline.main,
      image: `${nyTimes.originUrl}${obj.multimedia[0]?.url}`,
      description: obj.snippet,
      source: obj.source,
      author: obj.byline.original ? obj.byline.original : '',
      link: obj.web_url,
      publishedAt: obj.pub_date,
    });
  });

  theNewsData?.forEach((obj: ITheNewsArticle) => {
    mergedNews.push({
      title: obj.title,
      image: obj.image_url,
      description: obj.snippet,
      source: obj.source,
      author: obj.source,
      link: obj.url,
      publishedAt: obj.published_at,
    });
  });

  gNewsData?.forEach((obj: IGNewsArticle) => {
    mergedNews.push({
      title: obj.title,
      image: obj.image,
      description: obj.description,
      source: obj.source.name,
      author: obj.source.name,
      link: obj.url ? obj.url : '',
      publishedAt: obj.publishedAt,
    });
  });

  return mergedNews;
};

export default mergeArticles;

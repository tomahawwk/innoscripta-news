import {ITheNewsArticle} from '../store/models/ITheNewsArticle';
import {INYArticle} from '../store/models/INYArticle';
import {IWorldNewsArticle} from '../store/models/IWorldNewsArticle';
import {IArticle} from '../store/models/IArticle';
import {nyTimes} from '../constants';

const mergeArticles = ({
  nyTimesData,
  worldNewsData,
  theNewsData,
}: {
  nyTimesData: INYArticle[];
  worldNewsData: IWorldNewsArticle[];
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

  worldNewsData?.forEach((obj: IWorldNewsArticle) => {
    mergedNews.push({
      title: obj.title,
      image: obj.image,
      description: obj.text,
      source: '',
      author: obj.author,
      link: obj.url ? obj.url : '',
      publishedAt: obj.publish_date,
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

  return mergedNews;
};

export default mergeArticles;

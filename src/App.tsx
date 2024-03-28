import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from './store/hooks/redux';
import BaseLayout from './layouts/BaseLayout';
import Filters from './components/Filters';
import List from './components/List';
import Card from './components/Card';
import {fetchNews} from './store/reducers/ActionCreators';
import Skeleton from './components/Card/Skeleton';
import {getFiltersSelector} from './store/reducers/FiltersSlice';
import {IArticle} from './store/models/IArticle';
import mergeArticles from './utils/mergeArticles';

const skeletonArticles: any = [];

for (let i = 1; i <= 15; i++) {
  skeletonArticles.push(<Skeleton key={i} />);
}

function App() {
  const {articles, isLoading} = useAppSelector(state => state.newsReducer);
  const {params} = useAppSelector(getFiltersSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews(params));
  }, []);

  return (
    <div className="App overflow-x-hidden">
      <BaseLayout>
        <div className="grid items-start gap-md md:gap-lg">
          <h1 className="text-[32px] md:text-h1 animation-fade-y">
            Innoscripta News
          </h1>
          <div className="grid items-start gap-lg md:gap-xl">
            <Filters />
            {isLoading ? (
              <List>{skeletonArticles}</List>
            ) : mergeArticles(articles).length ? (
              <List>
                {mergeArticles(articles).map(article => (
                  <div key={article.link}>
                    <Card {...article} />
                  </div>
                ))}
              </List>
            ) : (
              <p>
                No articles were found for these filters. Select other filters
                or click "clear filters"
              </p>
            )}
          </div>
        </div>
      </BaseLayout>
    </div>
  );
}

export default App;

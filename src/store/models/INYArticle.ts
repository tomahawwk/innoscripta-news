type INYArticleMedia = {
  url: string;
};

type INYArticleAuthor = {
  original: string;
};

export interface INYArticle {
  headline: {main: string};
  multimedia: INYArticleMedia[];
  snippet: string;
  source: string;
  byline: INYArticleAuthor;
  web_url: string;
  pub_date: string;
}

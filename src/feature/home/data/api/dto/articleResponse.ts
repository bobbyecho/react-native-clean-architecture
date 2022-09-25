export type ArticleItem = {
  source?: {
    id?: string;
    name?: string;
  };
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishAt?: string;
  content?: string;
}

export type ArticleResponse = ArticleItem[]
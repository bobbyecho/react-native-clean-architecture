export type Article = {
  author: string;
  title: string
  description: string;
}

export type ArticleList = Article[]

export type GetArticleParam = {
  limit: number;
  keyword: string;
}
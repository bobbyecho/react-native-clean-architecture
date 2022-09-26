import type { ArticleRequestParam } from "../../data/api/dto/articleRequest";
import type { GetArticleParam } from "../../domain/model/articleModel";

const toRequestParam = (param: GetArticleParam): ArticleRequestParam => ({
  pageSize: param.limit,
  q: param.keyword
})

export default toRequestParam
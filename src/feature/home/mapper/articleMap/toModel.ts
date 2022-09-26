import type { ArticleResponse } from "../../data/api/dto/articleResponse";
import type { ArticleList } from "../../domain/model/articleModel";

const toModel = (response: ArticleResponse): ArticleList => {
  return response.map((article) => {
    return {
      author: article.author || "",
      description: article.description || "",
      title: article.title || ""
    }
  })
}

export default toModel
import { ArticleResponse } from "../../data/api/dto/articleResponse";
import { ArticleList } from "../../domain/model/articleModel";

export function toModel(response: ArticleResponse): ArticleList {
  return response.map((article) => {
    return {
      author: article.author || "",
      description: article.description || "",
      title: article.title || ""
    }
  })
}
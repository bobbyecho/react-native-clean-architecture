import type { IUseCase } from "../../../../core/interface/usecase";
import type { IHomeRepository } from "../../data/repository/homeRepository";
import articleMap from "../../mapper/articleMap";
import type { ArticleList, GetArticleParam } from "../model/articleModel";

export type GetArticlesUseCase = IUseCase<GetArticleParam, ArticleList>

export function getArticlesUseCase(
  repository: IHomeRepository,
): GetArticlesUseCase {
  return {
   async execute({keyword, limit}) {
      const articleResponse = await repository.getEverything({
        pageSize: limit,
        q: keyword
      });
      return articleMap.toModel(articleResponse)
   }
  }
}
import type { IUseCase } from "../../../../core/interface/usecase";
import type { IHomeRepository } from "../../data/repository/homeRepository";
import articleMap from "../../mapper/articleMap";
import type { ArticleList } from "../model/articleModel";

export type GetArticlesUseCase = IUseCase<number, ArticleList>

export function getArticlesUseCase(
  repository: IHomeRepository,
): GetArticlesUseCase {
  return {
   async execute(param) {
      const articleResponse = await repository.getEverything({pageSize: param})
      return articleMap.toModel(articleResponse)
   }
  }
}
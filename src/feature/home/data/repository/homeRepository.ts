import type { IHomeDataSource } from "../api/datasource/homeDataSource";
import type { ArticleRequestParam } from "../api/dto/articleRequest";
import type { ArticleResponse } from "../api/dto/articleResponse";

export interface IHomeRepository {
  getEverything(param: ArticleRequestParam): Promise<ArticleResponse>
}

export function homeRepository(
  api: IHomeDataSource
): IHomeRepository {
  return {
    getEverything(param) {
      return api.getEverything(param)
    },
  }
}


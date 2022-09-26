import BaseRepository from "../../../../core/base/baseRepository";
import type { GenericResponse } from "../../../../core/base/genericResponse";
import type { IHomeDataSource } from "../api/datasource/homeDataSource";
import type { ArticleRequestParam } from "../api/dto/articleRequest";
import type { ArticleResponse } from "../api/dto/articleResponse";

export interface IHomeRepository {
  getEverything(param: ArticleRequestParam): GenericResponse<ArticleResponse>
}

export class HomeRepositoryImpl extends BaseRepository implements IHomeRepository  {
  constructor(private api: IHomeDataSource) {
    super()
  }

  getEverything(param: ArticleRequestParam): GenericResponse<ArticleResponse> {
    return this.safePromiseCall(() => this.api.getEverything(param))
  }
}

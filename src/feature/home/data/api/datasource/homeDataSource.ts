import axios from "../../../../../core/httpclient/axios"
import type { ArticleRequestParam } from "../dto/articleRequest"
import type { ArticleResponse } from "../dto/articleResponse"

export interface IHomeDataSource {
  getEverything(param: ArticleRequestParam): Promise<ArticleResponse>
}

export function homeDataSource (): IHomeDataSource {
  return {
    getEverything(limit) {
      return axios.get(`/everything?pageSize=${limit}`)
    },
  }
}
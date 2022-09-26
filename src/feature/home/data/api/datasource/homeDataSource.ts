import type { AxiosError, AxiosPromise, AxiosResponse } from "axios"
import type { BaseResponse } from "src/core/base/baseResponse"
import axios from "../../../../../core/httpclient/axios"
import type { ArticleRequestParam } from "../dto/articleRequest"
import type { ArticleResponse } from "../dto/articleResponse"

export interface IHomeDataSource {
  getEverything(param: ArticleRequestParam): AxiosPromise<BaseResponse<ArticleResponse>>
}

export function homeDataSource (): IHomeDataSource {
  return {
    getEverything(param) {
      return axios.get(`/everything?q=${param.q}&pageSize=${param.pageSize}`)
    },
  }
}
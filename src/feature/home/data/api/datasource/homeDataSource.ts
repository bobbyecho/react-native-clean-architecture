import axios from "../../../../../core/httpclient/axios"
import type { ArticleRequestParam } from "../dto/articleRequest"
import type { ArticleResponse } from "../dto/articleResponse"

export interface IHomeDataSource {
  getEverything(param: ArticleRequestParam): Promise<ArticleResponse>
}

export function homeDataSource (): IHomeDataSource {
  return {
    async getEverything({pageSize, q}) {
      try {
        const response = await axios.get(`/everything?q=${q}&pageSize=${pageSize}`)
        return response.data.articles
      } catch(e) {
        console.log(e)
      }
    },
  }
}
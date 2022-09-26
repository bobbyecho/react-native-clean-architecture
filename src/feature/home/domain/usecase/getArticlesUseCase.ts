import type { BaseStoreState } from "../../../../core/interface/store";
import getState from "../../../../core/utils/getState";
import type { IUseCase } from "../../../../core/interface/usecase";
import type { IHomeRepository } from "../../data/repository/homeRepository";
import articleMap from "../../mapper/articleMap";
import type { IArticleStore } from "../../store/articleStore";
import type { ArticleList, GetArticleParam } from "../model/articleModel";
interface IGetArticlesUseCase extends IUseCase<GetArticleParam, Promise<void>> {
  articleState: BaseStoreState<ArticleList>
}

export function getArticlesUseCase(
  repository: IHomeRepository,
  store: IArticleStore
): IGetArticlesUseCase {
  return {
   async execute(param) {
      store.setLoading()
      const mapToRequestParam = articleMap.toRequestParam(param)
      const articleResponse = await repository.getEverything(mapToRequestParam);
      if (articleResponse.ok) {
        const mapToModel = articleMap.toModel(articleResponse.data || [])
        store.setSuccess(mapToModel)
      } else {
        store.setError(articleResponse.message || "")
      }
   },
   articleState: getState(store)
  }
}
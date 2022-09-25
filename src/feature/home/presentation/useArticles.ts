import getState from "src/core/utils/getState"
import homeContainer from "../di/homeContainer"
import type { ArticleList } from "../domain/model/articleModel"

const useArticles = () => {
  const{ getArticlesUseCase } = homeContainer.useCases()
  const { articleStore } = homeContainer.stores()
  
  const store = articleStore()
  const articleState = getState<ArticleList>(store)

  const fetchArticles = async (limit: number) => {
    try {
      store.setLoading()
      const response = await getArticlesUseCase().execute(limit)
      store.setSuccess(response)
    } catch(e) {
      store.setError(e as string)
    }
  }

  return {
    fetchArticles,
    articleState
  }
}

export default useArticles;
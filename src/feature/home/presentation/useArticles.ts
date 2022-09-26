import homeContainer from "../di/homeContainer"

const useArticles = () => {
  const{ getArticlesUseCase } = homeContainer.useCases()
  const { execute, articleState } = getArticlesUseCase()

  const fetchArticles = async (keyword = "bitcoin", limit: number = 20) => {
      await execute({ keyword, limit })
  }

  return {
    fetchArticles,
    articleState
  }
}

export default useArticles;
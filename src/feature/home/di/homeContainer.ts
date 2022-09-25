import { homeDataSource } from "../data/api/datasource/homeDataSource";
import { homeRepository } from "../data/repository/homeRepository";
import { articleStore } from "../store/articleStore";
import { getArticlesUseCase } from "../domain/usecase/getArticlesUseCase";

function dataSources() {
  return {
    homeDataSource: () => homeDataSource()
  }
}

function repositories() {
  return {
    homeRepository: () => homeRepository(dataSources().homeDataSource())
  }
}

function stores() {
  return {
    articleStore: () => articleStore()
  }
}

function useCases() {
  return {
    getArticlesUseCase: () => getArticlesUseCase(repositories().homeRepository())
  }
}

export default {
  dataSources,
  repositories,
  stores,
  useCases
}
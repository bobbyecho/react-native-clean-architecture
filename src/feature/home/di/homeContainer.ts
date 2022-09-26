import { homeDataSource } from "../data/api/datasource/homeDataSource";
import { HomeRepositoryImpl } from "../data/repository/homeRepository";
import { articleStore } from "../store/articleStore";
import { getArticlesUseCase } from "../domain/usecase/getArticlesUseCase";

function dataSources() {
  return {
    homeDataSource: () => homeDataSource()
  }
}

function repositories() {
  return {
    homeRepository: () => new HomeRepositoryImpl(dataSources().homeDataSource())
  }
}

function stores() {
  return {
    articleStore: () => articleStore()
  }
}

function useCases() {
  return {
    getArticlesUseCase: () => getArticlesUseCase(
      repositories().homeRepository(),
      stores().articleStore()
    )
  }
}

export default {
  dataSources,
  repositories,
  stores,
  useCases
}
import create  from "zustand";
import type { BaseStore } from "src/core/interface/store";
import type { StateCreator } from "zustand";
import type { ArticleList } from "../domain/model/articleModel";

export interface IArticleStore extends BaseStore<ArticleList> {}

const articleSlice: StateCreator<
  IArticleStore,
  [],
  [],
  IArticleStore
> = (set) => ({
  data: [],
  error: false,
  loading: false,
  message: null,
  setSuccess(data, message = null) {
    set(() => ({
      data,
      message,
      loading: false,
      error: false,
    }))
  },
  setError(message = null) {
    set(() => ({
      message,
      data: [],
      loading: false,
      error: true
    }))
  },
  setLoading() {
    set(() => ({
      loading: true,
      error: false,
      message: null
    }))
  }
})

const articleStore = create<IArticleStore>()((...rest) => ({
  ...articleSlice(...rest)
}))

export {
  articleSlice,
  articleStore
}
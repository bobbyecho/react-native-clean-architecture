import type { BaseStore, BaseStoreState } from "../interface/store";

const getState  = <R>(attr: BaseStore<R>): BaseStoreState<R> => ({
  data: attr.data,
  error: attr.error,
  loading: attr.loading,
  message: attr.message
})

export default getState;
import type { BaseStore, BaseStoreState } from "./store"


type ReturnExecute<R> = R extends Promise<R> ? Promise<R> : R
type executeParam<P, R> = (param: P extends undefined ? undefined : P) => ReturnExecute<R>
type executeWithoutParam<R> = () => ReturnExecute<R>
export interface IUseCase<Param, Return> {
  execute: Param extends null ? executeWithoutParam<Return> : executeParam<Param, Return>
}
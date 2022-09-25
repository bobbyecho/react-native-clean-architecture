export interface IUseCase<P, R = any> {
  execute(param: P): Promise<R>
}
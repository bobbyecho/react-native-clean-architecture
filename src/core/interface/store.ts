export type BaseStoreState<R> = {
  readonly loading: boolean;
  readonly data: R;
  readonly error: boolean | null;
  readonly message: string | null;
}

export interface BaseStoreAction<R> {
  setSuccess(data: R, message?: string | null): void;
  setError(message: string | null): void;
  setLoading(): void;
}

export interface BaseStore<R> extends BaseStoreAction<R>, BaseStoreState<R> {}
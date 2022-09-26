export type GenericResponse<R> = Promise<{
  ok: boolean;
  data?: R;
  message?: string | null;
  httpCode: number;
  clientCode?: string;
}>
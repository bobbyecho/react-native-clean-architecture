export type BaseResponse<R> = {
  status: "error" | "ok";
  totalResults?: number;
  articles?: R;
  code?: string;
  message?: string;
}
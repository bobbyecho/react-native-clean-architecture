import type { AxiosPromise } from "axios";
import type { BaseResponse } from "./baseResponse";
import type { GenericResponse } from "./genericResponse";

abstract class BaseRepository {
  async safePromiseCall<R>(apiCall: () => AxiosPromise<BaseResponse<R>>): GenericResponse<R> {
      const response = await apiCall()
      return {
        ok: response.data.status === "ok",
        data: response.data?.articles,
        clientCode: response.data.code,
        httpCode: response.status,
        message: response.data.message
      }
  }

  proceed<R = any>(func: () => R): R {
    try {
      return func()
    } catch (error: any) {
      throw error?.message || 'Error Proceed'
    }
  }
}

export default BaseRepository
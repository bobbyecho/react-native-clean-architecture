import _axios, { AxiosError } from "axios";

const axios = _axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'X-Api-Key': '197ef0911b38449eba6298e30ddca210'
  },
  timeout: 60
})

axios.interceptors.response.use((response) => response, (error) => {
  const err = error as AxiosError;
  return {
    status: err.response?.status,
    data: {
      status: "error",
      articles: null,
      httpCode: err.response?.status,
      // @ts-ignore
      code: err.response?.data?.code,
      // @ts-ignore
      message: err.response?.data?.message
    }
  }
})

export default axios;
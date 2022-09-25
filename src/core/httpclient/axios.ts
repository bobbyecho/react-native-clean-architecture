import _axios from "axios";

const axios = _axios.create({
  baseURL: 'https://newsapi.org/v2/everything',
  headers: {
    'X-Api-Key': '197ef0911b38449eba6298e30ddca210'
  },
  timeout: 20
})

export default axios;
import _axios from "axios";

const axios = _axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'X-Api-Key': '197ef0911b38449eba6298e30ddca210'
  },
  timeout: 60
})

export default axios;
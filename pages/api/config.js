import axios from 'axios'

const api = axios.create({
  // baseURL: "https://sth.org.br/wp-json/wp/v2/"
  baseURL: "https://sth.org.br/"
});

export default api
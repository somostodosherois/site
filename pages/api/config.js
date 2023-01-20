import axios from 'axios'

const api = axios.create({
  baseURL: "https://sth-api-teste.herokuapp.com/api/"
});

export default api
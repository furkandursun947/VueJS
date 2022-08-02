import axios from "axios"

const api = axios.create({
  baseURL : "https://fakestoreapi.com/",
  headers:{
  }
})
// instance.defaults.headers.common[""]

export default api;

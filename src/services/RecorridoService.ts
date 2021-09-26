import axios, { AxiosInstance } from 'axios';



export default class RecorridoService {
  apiBack : AxiosInstance;

  constructor () {
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    this.apiBack = axios.create({
      baseURL: "https://demo.recorrido.cl/api/v2/es",
      withCredentials: true,
      auth: {
        username: "recorrido",
        password: "recorrido"
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cookie': 'locale=es',
      }
    })
  }

  

  getCities() {
    return this.apiBack.get("/cities.json?country=chile")
  }
}
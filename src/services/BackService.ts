import axios, { AxiosInstance } from 'axios';

export default class BackService {
  apiBack : AxiosInstance;

  constructor () {
    this.apiBack = axios.create({
      baseURL: '...',
      withCredentials: false,
      headers: {
        Accept: 'applicacion/json',
        'Content-Type': 'application/jso',
      }
    })
  }

  firstRequest() {
    return this.apiBack.get('/..')
  }
}
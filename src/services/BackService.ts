import axios, { AxiosInstance } from 'axios';

interface LoginParams {
  username: string,
  password: string,
}

export default class BackService {
  apiBack : AxiosInstance;

  constructor () {
    this.apiBack = axios.create({
      baseURL: 'http://127.0.0.1:3000',
      withCredentials: false,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
  }

  signup(login_params: LoginParams) {
    return this.apiBack.post('/users/signup', login_params)
  }
}
import axios, { AxiosInstance } from 'axios';

interface SingupParams {
  name: string,
  username: string,
  password: string,
}
interface LoginParams {
  username: string,
  password: string,
}
interface CreateAlertParams {
  name: string,
  origin_id: number,
  destiny_id: number,
  class_id: number,
  price: number,
  user_id: number
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

  signup(signup_params: SingupParams) {
    return this.apiBack.post('/users/signup', signup_params)
  }
  
  login(login_params: LoginParams) {
    return this.apiBack.post('/users/login', login_params)
  }

  createPriceAlert(create_params: CreateAlertParams) {
    return this.apiBack.post('/price_alerts', create_params)
  }
}
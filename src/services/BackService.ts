import axios, { AxiosInstance } from 'axios';

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

  constructor ( public token : string) {
    this.apiBack = axios.create({
      baseURL: process.env.VUE_APP_BACKBASE,
      withCredentials: false,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
  }

  createPriceAlert(create_params: CreateAlertParams) {
    return this.apiBack.post('/price_alerts', create_params)
  }

  getPriceAlerts(id: number) {
    return this.apiBack.get('/price_alerts/find_by_userid/' + id)
  }

  getCities() {
    return this.apiBack.get('/cities')
  }
}
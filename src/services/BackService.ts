import axios, { AxiosInstance } from 'axios';
import { PriceAlert } from '@/models/PriceAlert';

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

  createPriceAlert(create_params: PriceAlert) {
    return this.apiBack.post('/price_alerts', create_params)
  }

  getPriceAlerts(id: number) {
    return this.apiBack.get('/price_alerts/find_by_userid/' + id)
  }

  getCities() {
    return this.apiBack.get('/cities')
  }

  getMinPrice(priceAlertId : number) {
    return this.apiBack.get('/min_prices/' + priceAlertId )
  }
}
export interface PriceAlert {
  id?: number
  name: string
  origin_id: number
  origin_name: string
  origin_url_name: string
  destiny_id: number
  destiny_name: string
  destiny_url_name: string
  class_id: number
  class_name: string
  price: number
  user_id: number
  created_at?: string
}
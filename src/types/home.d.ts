import type { GoodsItem } from './global'

export type BannerItem = {
  hreUrl: string
  id: string
  imgUrl: string
  type: number
}

export type CategoryItem = {
  icon: string
  id: string
  name: string
}

export type HotItem = {
  alt: string
  id: string
  pictures: string[]
  target: string
  title: string
  type: string
}

/** 猜你喜欢-商品类型 */
export type GuessItem = GoodsItem

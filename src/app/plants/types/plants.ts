export interface Plant {
  id: number
  name: string
  slug: string
  category_name: string
  images: {
    id: number
    url: string
  }[]
}
export type Product = {
  id: number
  image: string
  name: string
  price: number
  description?: string
  shortDescription: string
}

export type PageResponseType = {
  data: Product[]
  meta: { totalPages: number }
}

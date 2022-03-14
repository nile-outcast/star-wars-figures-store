import { BASE_URL } from 'config'
import useSWRInfinite, { SWRInfiniteConfiguration } from 'swr/infinite'

export const useProducts = <T>(options?: SWRInfiniteConfiguration<T>) => {
  const fetcher = (page: string) =>
    fetch(`${BASE_URL}/api/products?page=${page}`).then(res => res.json())

  const getKey = (pageIndex: number) => `${pageIndex + 1}`

  return useSWRInfinite<T>(getKey, fetcher, options)
}

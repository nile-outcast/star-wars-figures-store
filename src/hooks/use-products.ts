import { BASE_URL } from 'config'
import useSWR from 'swr'

export const useProducts = <T>(page: number) => {
  const fetcher = (page: string) =>
    fetch(`${BASE_URL}/api/products?page=${page}`).then(res => res.json())

  return useSWR<T>(`${page}`, fetcher)
}

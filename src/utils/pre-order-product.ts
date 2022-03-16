import { BASE_URL } from 'config'

type Response = {
  data?: {
    message: string
  }
  error?: string
  errors?: {
    email: string
  }
}

export const preOrderProduct = async (id: number, email: string) => {
  const res = await fetch(`${BASE_URL}/api/pre-order`, {
    method: 'POST',
    body: JSON.stringify({ productId: id, email: email }),
  })

  const { data, error, errors }: Response = await res.json()

  return {
    message: data && data.message,
    error: errors ? errors.email : error,
  }
}

import { useEffect, useState } from 'react'

export const useBreakpoint = () => {
  const [width, setWidth] = useState<number>(1920)

  useEffect(() => {
    const getWidth = () => setWidth(document.documentElement.clientWidth)
    getWidth()

    window.addEventListener('resize', getWidth)

    return () => window.removeEventListener('resize', getWidth)
  }, [])

  if (width > 1400) return 'xl'

  if (width <= 1400 && width > 980) return 'lg'

  if (width <= 980 && width > 768) return 'md'

  if (width <= 768 && width > 525) return 'sm'

  return 'bs'
}

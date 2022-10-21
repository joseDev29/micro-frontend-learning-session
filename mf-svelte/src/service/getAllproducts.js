const url = 'https://fakestoreapi.com/products'

export const fetchGetAllProducts = async () => {
  const res = await fetch(url)
  return await res.json()
}

export const data = await fetchGetAllProducts()

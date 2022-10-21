import axios from 'axios'

export const getProductById = ({ productId }) =>
  axios.get(`https://fakestoreapi.com/products/${productId}`);

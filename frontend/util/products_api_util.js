export const fetchProducts = products => {
  return $.ajax({
      url: '/api/products'
  })
}
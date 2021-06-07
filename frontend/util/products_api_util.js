export const fetchAllProducts = () => {
  return $.ajax({
    url: "/api/products",
  });
};

export const fetchProduct = (productId) => {
  return $.ajax({
    url: `/api/products/${productId}`,
  });
};

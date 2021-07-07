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

export const fetchCartItemProducts = (userId) => {
  return $.ajax({
    url: `/api/user_cart_items/${userId}`,
  });
};

export const fetchAllProductsInCat = (catId) => {
  return $.ajax({
    url: `/api/category/${catId}`,
  });
};

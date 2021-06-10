export const fetchAllCartItems = (userId) => {
  return $.ajax({
    url: "/api/cart_items",
    data: { id: userId },
  });
};

// export const fetchCartItem = (cartItemId) => {
//   return $.ajax({
//     url: `/api/reviews/${cartItemId}`,
//   });
// };

export const createCartItem = (cartItem) => {
  return $.ajax({
    url: "/api/cart_items",
    method: "post",
    data: { cartItem },
  });
};

export const updateCartItem = (cartItem) => {
  return $.ajax({
    url: "/api/cart_items",
    method: "patch",
    data: { cartItem },
  });
};

export const deleteCartItem = (cartItemId) => {
  return $.ajax({
    url: `/api/cart_items/${cartItemId}`,
    method: "delete",
  });
};

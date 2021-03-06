export const fetchAllCartItems = (userId) => {
  return $.ajax({
    url: "/api/cart_items",
    data: { id: userId },
  });
};

export const createCartItem = (cartItem) => {
  return $.ajax({
    url: "/api/cart_items",
    method: "post",
    data: { cartItem },
  });
};

export const updateCartItem = (cartItem) => {
  return $.ajax({
    url: `/api/cart_items/${cartItem.id}`,
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

export const deleteAllCartItems = (userId) => {
  return $.ajax({
    url: `/api/user_cart_items/delete_all/${userId}`,
    method: "delete",
  });
};

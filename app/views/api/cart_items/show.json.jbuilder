json.set! @cart_item.product_id do
  json.extract! @cart_item, :id, :product_id, :quantity, :user_id
end
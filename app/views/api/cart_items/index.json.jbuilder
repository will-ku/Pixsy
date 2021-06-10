@cart_items.each do |cart_item|
  json.set! cart_item.id do
    json.extract! cart_item, :id, :user_id, :product_id, :quantity
    json.product_name cart_item.product.name
    json.product_price cart_item.product.price
    json.product_description cart_item.product.description
  end
end
@cart_items.each do |cart_item|
  json.set! cart_item.product_id do
    json.extract! cart_item, :id, :user_id, :product_id, :quantity
  end
end
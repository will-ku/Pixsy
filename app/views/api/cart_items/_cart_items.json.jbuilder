current_user_cart_items.each do |cart_item|
    json.set! cart_item.product_id do
      json.extract! cart_item, :id, :product_id, :quantity, :user_id
      json.product_name cart_item.product.name
      json.product_price cart_item.product.price
      json.seller_name cart_item.product.seller.first_name
      json.product_description cart_item.product.description
      json.photoUrl cart_item.product.photos.map { |file| url_for(file)}
    end
end


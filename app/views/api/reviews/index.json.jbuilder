@reviews.each do |review|
  json.set! review.id do 
    json.extract! 'product', :id, :product_id, :seller_id, :rating, :comment, :created_at, :updated_at
  end
end
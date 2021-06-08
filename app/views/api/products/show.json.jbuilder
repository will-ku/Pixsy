json.set! @product.id do
    json.partial! "api/products/product", product: @product
    json.photoUrl @product.photos.map { |file| url_for(file)}
end

# json.reviews do
#     @product.reviews.each do |review|
#         json.set! review.id do
#             json.extract! review, :id, :product_id, :seller_id, :rating, :comment, :created_at, :updated_at
#     end
# end

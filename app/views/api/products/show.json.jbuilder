json.set! @product.id do
    json.partial! "api/products/product", product: @product
    json.seller_name @product.seller.first_name
    json.photoUrl @product.photos.map { |file| url_for(file)}
    json.product_reviews do
        @product.reviews.each do |review|
            json.set! review.id do
                json.extract! review, :id, :product_id, :reviewer_id, :rating, :comment, :created_at, :updated_at
            end
        end
    end
end


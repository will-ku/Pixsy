json.set! @product.id do
    json.partial! "api/products/product", product: @product
    json.photoUrl @product.photos.map { |file| url_for(file)}
end
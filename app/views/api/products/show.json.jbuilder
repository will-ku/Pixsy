json.set! @product.id do
  json.partial! "api/products/product", product: @product
  json.photUrls @product.photos.map { |photo| url_for(photo)}
end


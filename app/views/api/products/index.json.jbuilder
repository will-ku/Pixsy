@products.each do |product|
  json.set! product.id do 
    json.partial! 'product', product: product
    json.photoUrl product.photos.map { |file| url_for(file)}
  end
end

# json.array! @products do |product|
#     json.partial! "/api/products/product" product: product
#     json.photoUrls @product.photos.map { |file| url_for(file)}
#   end
# end

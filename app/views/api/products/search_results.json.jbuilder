@products.each do |product|
  json.set! product.id do 
    json.partial! 'product', product: product
    json.categoryId product.category_id
    json.photoUrl product.photos.map { |file| url_for(file)}
  end
end
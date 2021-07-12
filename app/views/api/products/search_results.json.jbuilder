@products.each do |product|
  json.set! product.id do 
    json.partial! 'product', product: product
    json.categoryName @category_name
    json.photoUrl product.photos.map { |file| url_for(file)}
  end
end
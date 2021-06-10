@reviews.each do |review|
  json.set! review.id do
      json.extract! review, :id, :product_id, :reviewer_id, :rating, :comment, :created_at, :updated_at
  end
end
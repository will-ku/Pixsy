json.extract! @review, :id, :reviewer_id, :product_id, :comment, :rating, :created_at, :updated_at
json.reviewer_name @review.reviewer.first_name

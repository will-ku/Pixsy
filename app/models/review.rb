# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  reviewer_id :integer          not null
#  product_id  :integer          not null
#  comment     :text             not null
#  rating      :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
  validates :comment, :rating, presence: true
  validates :comment, :length => { :minimum => 1 }
  # validates :rating, inclusion: {in [1,2,3,4,5], message: "Rating must be between 1 and 5."}

  belongs_to :reviewer,
  foreign_key: :reviewer_id,
  class_name: :User

  belongs_to :product,
  foreign_key: :product_id,
  class_name: :Product

  # def valid_comment
  #   review = Review.find_by(id: params[:id])
  #   if review.comment.length < 1
  #     return true
  #   else
  #     return false
  #   end
  # end

end

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

  belongs_to :reviewer,
  foreign_key: :reviewer_id,
  class_name: :User

  belongs_to :product,
  foreign_key: :product_id,
  class_name: :Product

end

# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  product_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#  quantity   :integer          not null
#
class CartItem < ApplicationRecord
  belongs_to :product,
  foreign_key: :product_id,
  class_name: :Product

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User
end

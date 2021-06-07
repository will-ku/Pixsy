# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text             not null
#  price       :integer          not null
#  seller_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord
  has_many_attached :photos

  belongs_to :seller,
  foreign_key: :seller_id,
  class_name: :User
  
end

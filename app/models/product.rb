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
#  category_id :integer
#
class Product < ApplicationRecord
  has_many_attached :photos

  belongs_to :seller,
  foreign_key: :seller_id,
  class_name: :User
  
  has_many :reviews,
  foreign_key: :product_id,
  class_name: :Review

  belongs_to :category,
  foreign_key: :category_id,
  class_name: :Category

  has_many :cart_items,
  foreign_key: :product_id,
  class_name: :Product

  attr_reader :search

  def self.search(query)
    search_result = self.where("LOWER(name) like ?", "%#{query.downcase}%")
    
    if search_result.length > 0
      return search_result
    end  
  end

end

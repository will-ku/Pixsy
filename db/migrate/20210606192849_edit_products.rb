class EditProducts < ActiveRecord::Migration[5.2]
  def change
    remove_index :products, :seller_id
    add_index :products, :seller_id
  end
end

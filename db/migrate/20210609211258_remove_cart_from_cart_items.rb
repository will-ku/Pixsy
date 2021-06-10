class RemoveCartFromCartItems < ActiveRecord::Migration[5.2]
  def change
    remove_column :cart_items, :cart_id
  end
end

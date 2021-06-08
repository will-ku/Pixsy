class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :reviewer_id, null: false
      t.integer :product_id, null: false
      t.text :comment, null: false
      t.integer :rating, null: false
      t.timestamps
    end
  end
end

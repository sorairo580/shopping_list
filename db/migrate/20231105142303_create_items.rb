class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :item,       null: false, default: ""
      t.date :bought
      t.date :expiry
      t.integer :genre_id,  null: false
      t.integer :stock,     null: false
      t.timestamps
    end
  end
end

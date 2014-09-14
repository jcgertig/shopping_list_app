class CreateLocationprices < ActiveRecord::Migration
  def change
    create_table :locationprices do |t|
      t.string :value
      t.integer :location_id
      t.integer :item_id

      t.timestamps
    end
  end
end

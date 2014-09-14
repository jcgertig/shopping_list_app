class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :name
      t.datetime :use_date

      t.timestamps
    end
  end
end

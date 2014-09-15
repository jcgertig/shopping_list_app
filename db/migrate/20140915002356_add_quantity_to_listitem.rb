class AddQuantityToListitem < ActiveRecord::Migration
  def change
    add_column :listitems, :quantity, :integer, default: 1
  end
end

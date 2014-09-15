class AddGottenToListitem < ActiveRecord::Migration
  def change
    add_column :listitems, :gotten, :boolean
  end
end

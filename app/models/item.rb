class Item < ActiveRecord::Base
  has_many :locationprices
  has_many :locations, through: :locationprices

  has_many :listitems
  has_many :lists, through: :listitems
end

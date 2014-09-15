class Item < ActiveRecord::Base
  has_many :locationprices, dependent: :destroy
  has_many :locations, through: :locationprices

  has_many :listitems, dependent: :destroy
  has_many :lists, through: :listitems

  fuzzily_searchable :name
end

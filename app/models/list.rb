class List < ActiveRecord::Base
  has_many :listitems
  has_many :items, through: :listitems

  self.per_page = 10
  fuzzy_searchable :name
end

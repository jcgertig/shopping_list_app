class List < ActiveRecord::Base
  has_many :listitems
  has_many :items, through: :listitems
end

class List < ActiveRecord::Base
  has_many :listitems, dependent: :destroy
  has_many :items, through: :listitems

  paginates_per 10
end

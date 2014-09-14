class Location < ActiveRecord::Base
  has_many :locationprices
  has_many :items, through: :locationprices
end

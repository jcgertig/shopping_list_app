class Location < ActiveRecord::Base
  has_many :locationprices, dependent: :destroy
  has_many :items, through: :locationprices
end

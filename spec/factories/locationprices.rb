# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :locationprice do
    value "MyString"
    location_id 1
    item_id 1
  end
end

json.locations @locations do |location|
  json.id location.id
  json.name location.name
  json.address location.address
  json.created location.created_at.strftime('%Y-%m-%d %H:%M:%S')
  json.updated location.updated_at.strftime('%Y-%m-%d %H:%M:%S')
  json.items location.items.count
end

json.message @message

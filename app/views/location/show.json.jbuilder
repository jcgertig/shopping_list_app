json.location do
  json.id @location.id
  json.name @location.name
  json.address @location.address
  json.created @location.created_at.strftime('%Y-%m-%d %H:%M:%S')
  json.updated @location.updated_at.strftime('%Y-%m-%d %H:%M:%S')

  json.items @location.items do |item|
    json.id item.id
    json.name item.name
    json.price item.pricelocations.where(location_id: @location.id).value
  end
end

json.message @message

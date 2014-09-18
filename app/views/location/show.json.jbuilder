json.location do
  json.id @location.id
  json.name @location.name
  json.address @location.address
  json.created @location.created_at.strftime('%Y-%m-%d %H:%M:%S')
  json.updated @location.updated_at.strftime('%Y-%m-%d %H:%M:%S')

  json.prices @location.items do |item|
    json.id item.locationprices.where(location_id: @location.id).first.id
    json.price item.locationprices.where(location_id: @location.id).first.value
    json.item do
      json.id item.id
      json.name item.name
    end
  end
end

json.message @message

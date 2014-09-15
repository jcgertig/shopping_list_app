json.item do
  json.id @item.id
  json.name @item.name
  json.created @item.created_at.strftime('%Y-%m-%d %H:%M:%S')
  json.updated @item.updated_at.strftime('%Y-%m-%d %H:%M:%S')
  json.prices @item.pricelocations do |price|
    json.id price.id
    json.value price.value
    json.location do
      json.id price.location.id
      json.name price.location.name
      json.address price.location.address
    end
  end
end

json.message @message

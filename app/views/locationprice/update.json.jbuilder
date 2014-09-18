json.price do
  json.id @price.id
  json.price @price.value
  json.item do
    json.id price.item.id
    json.name price.item.name
  end
  json.created @price.created_at.strftime('%Y-%m-%d %H:%M:%S')
  json.updated @price.updated_at.strftime('%Y-%m-%d %H:%M:%S')
end

json.message @message

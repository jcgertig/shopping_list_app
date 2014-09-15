json.items @items do |item|
  json.id item.id
  json.name item.name
  json.quantity item.quantity
  json.created item.created_at.strftime('%Y-%m-%d %H:%M:%S')
  json.updated item.updated_at.strftime('%Y-%m-%d %H:%M:%S')
end

json.message @message

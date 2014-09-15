json.items @items do |item|
  json.id item.id
  json.name item.name
end

json.message @message

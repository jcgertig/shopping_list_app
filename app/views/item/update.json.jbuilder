json.item do
  json.id @item.id
  json.name @item.name
  json.created @item.created_at.strftime('%Y-%m-%d %H:%M:%S')
  json.updated @item.updated_at.strftime('%Y-%m-%d %H:%M:%S')
end

json.message @message

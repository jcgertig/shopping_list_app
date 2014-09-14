json.list do
  json.id @list.id
  json.name @list.name
  json.created @list.created_at.strftime('%Y-%m-%d %H:%M:%S')
  json.created @list.updated_at.strftime('%Y-%m-%d %H:%M:%S')
end

json.message @message

json.list do
  json.id @list.id
  json.name @list.name
  json.created @list.created_at.strftime('%Y-%m-%d %H:%M:%S')
  json.created @list.updated_at.strftime('%Y-%m-%d %H:%M:%S')

  json.items @list.items do |item|
    json.id item.id
    json.name item.name
    json.prices item.pricelocations do |price|
      json.value price.value
      json.location do
        json.name price.location.name
        json.address price.location.address
      end
    end
  end
end

json.message @message

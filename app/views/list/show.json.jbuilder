json.list do
  json.id @list.id
  json.name @list.name
  json.created @list.created_at.strftime('%Y-%m-%d %H:%M:%S')
  json.updated @list.updated_at.strftime('%Y-%m-%d %H:%M:%S')

  json.items @list.listitems do |listitem|
    json.item do
      json.id listitem.id
      json.name listitem.item.name
    end

    json.quantity listitem.quantity
    json.gotten listitem.gotten

    json.prices listitem.item.locationprices do |price|
      json.value price.value
      json.location do
        json.name price.location.name
        json.address price.location.address
      end
    end
  end
end

json.message @message

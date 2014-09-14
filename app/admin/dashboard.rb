ActiveAdmin.register_page "Dashboard" do

  menu priority: 1, label: proc{ I18n.t("active_admin.dashboard") }

  content title: proc{ I18n.t("active_admin.dashboard") } do
    # div class: "blank_slate_container", id: "dashboard_default_message" do
    #   span class: "blank_slate" do
    #     span I18n.t("active_admin.dashboard_welcome.welcome")
    #     small I18n.t("active_admin.dashboard_welcome.call_to_action")
    #   end
    # end

    # Here is an example of a simple dashboard with columns and panels.
    #
    columns do
      column do
        panel "Recent Items" do
          ul do
            Item.recent(5).map do |item|
              li link_to(item.name, admin_item_path(item))
            end
          end
        end
      end

      column do
        panel "Recent Location Price" do
          ul do
            Locationprice.recent(5).map do |locationprice|
              li link_to("#{locationprice.location.name} : $#{locationprice.price.value}", admin_locationprice_path(locationprice))
            end
          end
        end
      end
    end
  end # content
end

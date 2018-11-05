class AddColumnsToBasicInfos < ActiveRecord::Migration[5.2]
  def change
    add_column :basic_infos, :phone, :string
    add_column :basic_infos, :website, :string
    add_column :basic_infos, :github, :string
  end
end

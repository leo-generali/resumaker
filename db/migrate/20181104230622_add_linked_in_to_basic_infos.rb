class AddLinkedInToBasicInfos < ActiveRecord::Migration[5.2]
  def change
    add_column :basic_infos, :linkedin, :string
  end
end

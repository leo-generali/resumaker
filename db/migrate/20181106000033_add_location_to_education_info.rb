class AddLocationToEducationInfo < ActiveRecord::Migration[5.2]
  def change
    add_column :education_infos, :location, :string
  end
end

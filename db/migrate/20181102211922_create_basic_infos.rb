class CreateBasicInfos < ActiveRecord::Migration[5.2]
  def change
    create_table :basic_infos do |t|
      t.string :name
      t.string :email
      t.references :resume, foreign_key: true

      t.timestamps
    end
  end
end

class CreateResumeBasicInfos < ActiveRecord::Migration[5.2]
  def change
    create_table :resume_basic_infos do |t|
      t.integer :resume_id
      t.string :name
      t.string :email
      t.string :phone

      t.timestamps
    end
  end
end

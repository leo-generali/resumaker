class CreateSkillInfos < ActiveRecord::Migration[5.2]
  def change
    create_table :skill_infos do |t|
      t.string :category
      t.string :skills, array: true, default: []
      t.references :resume, foreign_key: true

      t.timestamps
    end
  end
end

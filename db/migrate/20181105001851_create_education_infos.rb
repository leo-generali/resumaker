class CreateEducationInfos < ActiveRecord::Migration[5.2]
  def change
    create_table :education_infos do |t|
      t.references :resume, foreign_key: true
      t.string :institution
      t.string :area
      t.string :study_type
      t.string :start_date
      t.string :end_date
      t.decimal :gpa

      t.timestamps
    end
  end
end

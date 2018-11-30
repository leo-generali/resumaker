class CreateJobInfos < ActiveRecord::Migration[5.2]
  def change
    create_table :job_infos do |t|
      t.references :resume, foreign_key: true
      t.string :company
      t.string :position
      t.string :date
      t.string :location
      t.string :highlights, array: true, default: []

      t.timestamps
    end
  end
end

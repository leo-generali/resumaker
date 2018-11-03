class DropResumeBasicInfosTable < ActiveRecord::Migration[5.2]
  def up
    drop_table :resume_basic_infos
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end

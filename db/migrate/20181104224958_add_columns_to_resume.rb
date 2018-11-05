class AddColumnsToResume < ActiveRecord::Migration[5.2]
  def change
    add_column :resumes, :phone, :string
    add_column :resumes, :website, :string
    add_column :resumes, :github, :string
  end
end

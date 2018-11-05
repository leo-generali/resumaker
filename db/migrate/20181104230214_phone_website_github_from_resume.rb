class PhoneWebsiteGithubFromResume < ActiveRecord::Migration[5.2]
  def change
    remove_column :resumes, :phone
    remove_column :resumes, :website
    remove_column :resumes, :github
  end
end

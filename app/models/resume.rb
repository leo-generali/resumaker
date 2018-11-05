class Resume < ApplicationRecord
  belongs_to :user
  has_one :basic_info, dependent: :destroy

  after_create :create_basic_info

  private
    def create_basic_info
      basic_info = BasicInfo.create(name: '', email: '', phone: '', website: '', github: '')
      self.basic_info = basic_info
    end
end

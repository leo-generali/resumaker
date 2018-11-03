class Resume < ApplicationRecord
  belongs_to :user
  has_one :basic_info

  after_create :create_basic_info

  private
    def create_basic_info
      basic_info = BasicInfo.create(name: '', email: '')
      self.basic_info = basic_info
    end
end

class Resume < ApplicationRecord
  belongs_to :user
  has_one :basic_info, dependent: :destroy
  has_many :education_infos, dependent: :destroy

  after_create :create_basic_info, :create_education_info

  private
    def create_basic_info
      basic_info = BasicInfo.create(name: 'leo')
      self.basic_info = basic_info
    end

    def create_education_info
      education_info = EducationInfo.create(institution: 'leo school')
      self.education_infos << education_info
    end
end

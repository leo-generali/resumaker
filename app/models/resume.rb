class Resume < ApplicationRecord
  belongs_to :user
  has_one :basic_info, dependent: :destroy
  has_many :education_infos, dependent: :destroy
  has_many :skill_infos, dependent: :destroy

  after_create :create_basic_info, :create_education_info, :create_skill_info

  private
    def create_basic_info
      basic_info = BasicInfo.create()
      self.basic_info = basic_info
    end

    def create_education_info
      education_info = EducationInfo.create()
      self.education_infos << education_info
    end

    def create_skill_info
      skill_info = SkillInfo.create(category: 'Front End', skills: ['test', 'test2'])
      self.skill_infos << skill_info
    end
end

class Api::SkillInfosController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :update_skill, only: [:add_skill]
  before_action :get_resume_id, only: [:add_skill_category, :remove_skill_category]

  def add_skill
    @skill_info.skills.push('')
    @skill_info.save
    render json: @skill_info, except: [:created_at, :updated_at]
  end

  def remove_skill
    @skill_info = SkillInfo.find(params[:skill_info_id])
    @skill_info.skills.pop
    @skill_info.save
    render json: @skill_info, except: [:created_at, :updated_at]
  end

  def add_skill_category
    @skill_info = SkillInfo.new(resume_id: @resume_id, category: 'Testing', skills: ['test', 'test2'])
    @skill_info.save
    render json: @skill_info, except: [:created_at, :updated_at]
  end

  def remove_skill_category
    @skill_info = SkillInfo.find(params[:skill_info_id])
    @skill_info.destroy
    render json: @skill_info, except: [:created_at, :updated_at]
  end

  private

  def update_skill
    @skill_info = SkillInfo.find(params[:skill_info_id])
    @skill_info[:skills] = params[:skill_info_data][:skills]
  end

  def get_resume_id
    @resume_id = params[:resume_id]
  end
end

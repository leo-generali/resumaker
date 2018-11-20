class Api::SkillInfosController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :update_skill, only: [:add_skill]

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

  private

  def update_skill
    @skill_info = SkillInfo.find(params[:skill_info_id])
    @skill_info[:skills] = params[:skill_info_data][:skills]
  end
end

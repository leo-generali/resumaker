class Api::SkillInfosController < ApplicationController
  protect_from_forgery with: :null_session

  def add_skill
    p params[:skill_info_id]
    @skill_info = SkillInfo.find(params[:skill_info_id])
    @skill_info.skills.push('')
    @skill_info.save
    render json: @skill_info, except: [:created_at, :updated_at]
  end

  def remove_skill
    p params[:skill_info_id]
    @skill_info = SkillInfo.find(params[:skill_info_id])
    @skill_info.skills.pop
    @skill_info.save
    render json: @skill_info, except: [:created_at, :updated_at]
  end
end

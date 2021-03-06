class Api::EditorController < ApplicationController
  def show
    @resume = Resume.find(params[:id])
    render json: @resume, include: [:basic_info, :education_infos, :skill_infos, :job_infos], except: [:created_at, :updated_at]
  end
end

class ResumesController < ApplicationController
  def index
    @resume = Resume.new
    if current_user.nil?
      @resumes = []
    else
      @resumes = Resume.where(user_id:current_user.id)
    end
  end

  def create
    if current_user.nil?
      redirect_to resume_editor_path
    else
      @resume = current_user.resumes.new()
      if @resume.save
        redirect_to resume_editor_path, notice: 'Succesfully created a new resume!'
      else
        redirect_to application_root_path, notice: 'Did not create new resume!'
      end
    end
  end

  def edit
  end
end

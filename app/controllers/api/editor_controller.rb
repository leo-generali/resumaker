class Api::EditorController < ApplicationController
  def show
    @resume = Resume.find(params[:id])
    # render json: @resume, :in
    render json: @resume, include: [:basic_info], except: [:created_at, :updated]
  end
end

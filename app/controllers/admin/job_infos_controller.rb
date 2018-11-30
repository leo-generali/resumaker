module Admin
  class JobInfosController < Admin::ApplicationController
    # To customize the behavior of this controller,
    # you can overwrite any of the RESTful actions. For example:
    #
    # def index
    #   super
    #   @resources = JobInfo.
    #     page(params[:page]).
    #     per(10)
    # end

    # Define a custom finder by overriding the `find_resource` method:
    # def find_resource(param)
    #   JobInfo.find_by!(slug: param)
    # end

    def resource_params
      params["job_info"]["highlights"] = params["job_info"]["highlights"].split('; ')
      params.require(resource_name).permit(*dashboard.permitted_attributes, highlights: [])
    end

    # See https://administrate-prototype.herokuapp.com/customizing_controller_actions
    # for more information
  end
end

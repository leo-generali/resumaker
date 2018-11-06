module Admin
  class SkillInfosController < Admin::ApplicationController
    # To customize the behavior of this controller,
    # you can overwrite any of the RESTful actions. For example:
    #
    # def index
    #   super
    #   @resources = SkillInfo.
    #     page(params[:page]).
    #     per(10)
    # end

    # Define a custom finder by overriding the `find_resource` method:
    # def find_resource(param)
    #   SkillInfo.find_by!(slug: param)
    # end

    def resource_params
      params["skill_info"]["skills"] = params["skill_info"]["skills"].split(' ')
      params.require(resource_name).permit(*dashboard.permitted_attributes, skills: [])
    end

    # See https://administrate-prototype.herokuapp.com/customizing_controller_actions
    # for more information
  end
end

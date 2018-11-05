require "administrate/base_dashboard"

class EducationInfoDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    resume: Field::BelongsTo,
    id: Field::Number,
    institution: Field::String,
    area: Field::String,
    study_type: Field::String,
    start_date: Field::String,
    end_date: Field::String,
    gpa: Field::String.with_options(searchable: false),
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :resume,
    :id,
    :institution,
    :area,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :resume,
    :id,
    :institution,
    :area,
    :study_type,
    :start_date,
    :end_date,
    :gpa,
    :created_at,
    :updated_at,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :resume,
    :institution,
    :area,
    :study_type,
    :start_date,
    :end_date,
    :gpa,
  ].freeze

  # Overwrite this method to customize how education infos are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(education_info)
  #   "EducationInfo ##{education_info.id}"
  # end
end

require "administrate/base_dashboard"

class JobInfoDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    resume: Field::BelongsTo,
    id: Field::Number,
    company: Field::String,
    position: Field::String,
    date: Field::String,
    location: Field::String,
    highlights: Field::String,
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
    :company,
    :position,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :resume,
    :id,
    :company,
    :position,
    :date,
    :location,
    :highlights,
    :created_at,
    :updated_at,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :resume,
    :company,
    :position,
    :date,
    :location,
    :highlights,
  ].freeze

  # Overwrite this method to customize how job infos are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(job_info)
  #   "JobInfo ##{job_info.id}"
  # end
end

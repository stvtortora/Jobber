class Api::JobCategoriesController < ApplicationController
  def index
    @job_categories = JobCategory.all
    render :index
  end
end

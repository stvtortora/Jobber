class Api::JobCategoriesController < ApplicationController
  def index
    @job_categories = JobCategory.all.includes(:job_posts)
    render :index
  end
end

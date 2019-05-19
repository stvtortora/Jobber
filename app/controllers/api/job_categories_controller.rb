class Api::JobPostsController < ApplicationController
  def index
    @job_categories = JobCategory.all
    render :index
  end
end

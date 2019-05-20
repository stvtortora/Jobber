class Api::JobPostsController < ApplicationController
  def create
    @job_post = JobPost.new(job_post_params)

    if @job_post.save
      render :show
    else
      render json: @job_post.errors.full_messages, status: 422
    end
  end

  def index
    @job_posts = JobPost.retrieve_by_query(query_params)
    @total_count = JobPost.total_count_by_query(query_params)
    render :index
  end

  def show
    @job_post = JobPost.where(id: params[:id]).includes(:company, :job_category).first
    render :show
  end

  private
  def job_post_params
    params.require(:job_post).permit(
      :title, :city, :description,
      :company_id, :job_category_id,
      :job_type, :salary, :career_level,
      :experience, :industry, :qualification,
      :language, :keyword_a, :keyword_b, :keyword_c
    )
  end

  def query_params
    params.require(:query).permit(:keyword, :city, :job_type, :job_category, :order, :limit, :offset)
  end
end

class Api::JobPostsController < ApplicationController
  before_action :ensure_current_job_post_is_authorized, only: :show

  def create
    @job_post = JobPost.new(job_post_params)

    if @job_post.save
      login(@job_post)
      render "api/job_posts/current_job_post"
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
    @job_post = JobPost.find_by(id: params[:id])
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

  # def query_params
  #   puts params
  #   params.require(:query).permit(:filters, :limit, :offset, :sort)
  # end
  def query_params
    params.require(:query).permit(:keyword, :city, :job_type, :job_category, :order, :limit, :offset)
  end
end

class Api::JobPostsController < ApplicationController
  def create
    @job_post = JobPost.new(job_post_params)

    if @job_post.save
      render :show
    else
      render json: @job_post.errors.full_messages, status: 422
    end
  end

  def update
    @job_post = JobPost.find(params[:id])

    if @job_post.update_attributes(job_post_params)
      render :show
    else
      render json: @job_post.errors.full_messages, status: 422
    end
  end

  def index
    if params[:current_user_id]
      if  params[:current_user_id].to_i == current_user.id
        @job_posts = JobPost.joins(:company).where('companies.user_id = ?', current_user.id).includes(:company, :job_category)
        render :index
      else
        render json: ['Not authorized to view job posts']
      end
    else
      @job_posts = JobPost.retrieve_by_query(query_params)
      @total_count = JobPost.total_count_by_query(query_params)
      render :index
    end
  end

  def show
    @job_post = JobPost.where(id: params[:id]).includes(:company, :job_category).first
    render :show
  end

  def destroy
    @job_post = JobPost.where(id: params[:id]).includes(:company, :job_category).first

    if @job_post.company.user_id == current_user.id
      @job_post.destroy
      :show
    else
      render json: ['Not authorized to delete this job post']
    end
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

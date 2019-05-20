class Api::CompaniesController < ApplicationController
  def create
    @company = JobPost.new(company_params)
    @company.user = current_user
    
    if @company.save
      render :show
    else
      render json: @company.errors.full_messages, status: 422
    end
  end

  def index
    # @companies = JobPost.retrieve_by_query(query_params)
    # @total_count = JobPost.total_count_by_query(query_params)
    # render :index
  end

  def show
    @company = JobPost.where(id: params[:id])
    render :show
  end

  private
  def company_params
    params.require(:company).permit(
      :title, :city, :description,
      :website, :tagline, :linked_in,
      :twitter, :team_size, :industry,
      :phone_number
    )
  end

  def query_params
    params.require(:query).permit(:keyword, :city, :job_type, :job_category, :order, :limit, :offset)
  end
end

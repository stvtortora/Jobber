class Api::CompaniesController < ApplicationController
  def create
    puts 'params:'
    puts params
    @company = Company.new(company_params)
    @company.user = current_user

    @company.user = current_user
    puts "params:"
    puts company_params
    if @company.save
      render :show
    else
      render json: @company.errors.full_messages, status: 422
    end
  end

  def update
    @company = Company.find(params[:id])

    if @company.update_attributes(company_params)
      render :show
    else
      render json: @company.errors.full_messages, status: 422
    end
  end

  def index
    if params[:current_user_id]
      if params[:current_user_id].to_i != current_user.id
        render json: ['Not authorized']
      else
        @companies = Company.where(user: params[:current_user_id])
        render :index
      end
    else
      @companies = Company.retrieve_by_query(query_params).includes(:job_posts)
      @filter_counts = Company.filter_counts_by_query(query_params)
      render :index
    end
  end

  def show
    @company = Company.where('id = ?', params[:id]).includes(:job_posts).first
    render :show
  end

  def destroy
    @company = Company.find(params[:id])

    if @company.user_id == current_user.id
      @company.destroy
      :show
    else
      render json: ['Not authorized to delete this company']
    end
  end

  private
  def company_params
    params.require(:company).permit(
      :title, :city, :description,
      :website, :tagline, :linked_in,
      :twitter, :team_size, :industry,
      :phone_number, :facebook,
      :picture
    )
  end

  def query_params
    params.require(:query).permit(:order, :limit, :offset, :team_size, :industry, :keyword, :city)
  end
end

class Api::UsersController < ApplicationController
  before_action :ensure_current_user_is_authorized, only: :show

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/current_user"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :fname, :lname, :dname, :city)
  end

  def ensure_current_user_is_authorized
    unless current_user == User.find_by(id: params[:id])
      render json: ["Unauthorized attempt to access information"], status: 403
    end
  end
end

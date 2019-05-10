class Api::SessionsController < ApplicationController
  def create
    @user = User.includes(:favorites)
      .find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      render "api/users/current_user"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {}
    else
      render json: ["No user signed in"], status: 404
    end
  end
end

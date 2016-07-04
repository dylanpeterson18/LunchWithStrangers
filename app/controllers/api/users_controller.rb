class Api::UsersController < ApplicationController
  def create
		@user = User.new(user_params)
		if @user.save
			login(@user)
			render "api/users/show"
		else
			render json: @user.errors, status: 422
		end
	end

  def show

    if current_user.nil?
      # let them log in
      redirect_to new_session_url
      return
    end

    @user = current_user


    render :show
  end

	private

	def user_params
		params.require(:user).permit(:username, :password, :city)
	end
end

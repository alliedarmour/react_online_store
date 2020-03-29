class UsersController < ApplicationController
  def new
    if current_user
      redirect_to root_path, flash: { notice: "You are already signed up!" }
    else
      @user = User.new
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      cookies.signed[:user_id] = @user.id
      redirect_to root_path, flash: { notice: "Signed up successfully!" }
    else
      flash.now[:alert] = "Signed up failed!"
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end

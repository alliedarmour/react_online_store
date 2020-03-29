class SessionsController < ApplicationController
  def new
    redirect_to root_path if current_user
  end

  def create
    user = User.find_by(email: params[:email].downcase)

    if user&.authenticate(params[:password])
      cookies.signed[:user_id] = user.id
      redirect_to root_path, flash: { notice: "Signed In successfully" }
    else
      flash.now[:alert] = "Invalid email or password"
      render :new
    end
  end

  def destroy
    cookies.delete :user_id
    redirect_to root_path, flash: { notice: "Signed Out successfully" }
  end


end

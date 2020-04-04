class ApplicationController < ActionController::Base
    protect_from_forgery with: :null_session, only: Proc.new { |c| c.request.format.json? }

    private

    def current_user
        @current_user ||= User.find_by(id: cookies.signed[:user_id])
    end

    def require_signin
        unless current_user
            redirect_to signin_path, flash: { alert: "You have to sign in first!" }
        end
    end

    helper_method :current_user
end

class UserBugsController < ApplicationController
    before_action :set_userbug, only: [:show, :update, :destroy]

    def index
      @userbugs = UserBug.all
  
      render json: @userbugs
    end
  
    def show
      render json: @userbug
    end
  
    def create
      @userbug = UserBug.find_or_create_by(user_params)
  
      if @userbug.save
        render json: @userbug
      else
        render json: @userbug.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @userbug.update(user_params)
        render json: @userbug
      else
        render json: @userbug.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @userbug.destroy
    end
  
    private
      def set_user
        @userbug = UserBug.find(params[:id])
      end
  
      def userbug_params
        params.require(:userbug).permit(:user_id, :bug_id)
      end
end

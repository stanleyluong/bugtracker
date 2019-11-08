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
      # byebug
      @userbug = UserBug.new(userbug_params)
      if @userbug.save
        render json: @userbug
      else
        render json: @userbug.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @userbug.update(userbug_params)
        render json: @userbug
      else
        render json: @userbug.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @userbug.destroy
    end
  
    private
      def set_userbug
        @userbug = UserBug.find(params[:id])
      end
  
      def userbug_params
        params.require(:user_bug).permit(:user_id, :bug_id)
      end
end

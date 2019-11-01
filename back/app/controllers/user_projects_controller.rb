class UserProjectsController < ApplicationController
    before_action :set_userproject, only: [:show, :update, :destroy]

    def index
      @userprojects = UserProject.all
  
      render json: @userprojects
    end
  
    def show
      render json: @userproject
    end
  
    def create
      @userproject = UserProject.find_or_create_by(user_params)
  
      if @userproject.save
        render json: @userproject
      else
        render json: @userproject.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @userproject.update(user_params)
        render json: @userproject
      else
        render json: @userproject.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @userproject.destroy
    end
  
    private
      def set_userproject
        @userproject = UserProject.find(params[:id])
      end
  
      def userproject_params
        params.require(:userproject).permit(:user_id, :project_id)
      end
end

class ProjectBugsController < ApplicationController
    before_action :set_projectbug, only: [:show, :update, :destroy]

    def index
      @projectbugs = ProjectBug.all
  
      render json: @projectbugs
    end
  
    def show
      render json: @projectbug
    end
  
    def create
      @projectbug = ProjectBug.find_or_create_by(projectbug_params)
  
      if @projectbug.save
        render json: @projectbug
      else
        render json: @projectbug.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @projectbug.update(projectbug_params)
        render json: @projectbug
      else
        render json: @projectbug.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @projectbug.destroy
    end
  
    private
      def set_projectbug
        @projectbug = ProjectBug.find(params[:id])
      end
  
      def projectbug_params
        params.require(:project_bug).permit(:project_id, :bug_id)
      end
end

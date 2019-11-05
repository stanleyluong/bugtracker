class BugsController < ApplicationController
    before_action :set_bug, only: [:show, :update, :destroy]

  # GET /bugs
  def index
    @bugs = Bug.all

    render json: @bugs
  end

  # GET /bugs/1
  def show
    render json: @bug
  end

  # POST /bugs
  def create
    @bug = Bug.new(bug_params)

    if @bug.save
      render json: @bug, status: :created, location: @bug
    else
      render json: @bug.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bugs/1
  def update
    if @bug.update(bug_params)
      render json: @bug
    else
      render json: @bug.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bugs/1
  def destroy
    @bug.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bug
      @bug = Bug.find(params[:id])
    end

    # Only allow a trusted parameter    white list" through.
    def bug_params
      params.require(:bug).permit(:name, :priority, :attachment, :status, :description , :opened, :closed, :age, :submitted_by, :location)
    end
end

class Api::ListsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    new_params = {board_id: params[:board_id], title: params[:list][:title]}
    @list = List.new(new_params)

    if @list.save
      render :create, status: :created
    else
      @error = @list.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActionController::ParameterMissing
    @error = "Invalid list data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  def update
    @list = List.find(params[:id])
    @list.update!(list_params)
    render :update
  end

  private

  def list_params
    params.require(:list).permit(:board_id, :position, :title)
  end
end

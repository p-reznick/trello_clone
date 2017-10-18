class Api::ListsController < ApplicationController
  def create
    p list_params[:title]
    properly_formed_params = {
      board_id: list_params[:board_id],
      title: list_params[:title]
    };

    @list = List.new(properly_formed_params)

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
    render :update, status: :updated
  end

  private

  def list_params
    params.require(:list).permit(:board_id, :list, :title)
  end
end

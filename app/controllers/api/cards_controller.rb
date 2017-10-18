class Api::CardsController < ApplicationController
  def show
    @card = Card.find(params[:id])
    @board_id = List.find(@card.list_id).board_id
    render :show
  end

  def create
    new_params = {
      list_id: params[:list_id],
      title: params[:card][:title],
      position: params[:card][:position],
      description: params[:card][:description],
      archived: params[:card][:archived],
      due_date: params[:card][:due_date],
      completed: params[:card][:completed],
      labels: params[:card][:labels]
    }
    @card = Card.new(new_params)

    if @card.save
      render :create, status: :created
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActionController::ParameterMissing
    @error = "Invalid card data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  def update
    @card = Card.find(params[:id])
    @card.update!(card_params)
    render :update, status: :updated
  end

  private

  def card_params
    params.require(:card).permit(:id,
                                 :title,
                                 :list_id,
                                 :position,
                                 :description,
                                 :archived,
                                 :due_date,
                                 :completed,
                                 :labels)
  end
end

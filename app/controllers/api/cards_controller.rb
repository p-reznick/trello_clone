class Api::CardsController < ApplicationController
  def show
    @card = Card.find(params[:id])
    render :show
  end

  def create
    @card = Card.new(card_params)

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

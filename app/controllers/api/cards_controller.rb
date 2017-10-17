class Api::CardsController < ApplicationController
  def show
    @card = Card.find(params[:id])
    render :show
  end

  private

  def card_params
    params.require(:card).permit(:title)
  end
end

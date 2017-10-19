class Api::CommentsController < ApplicationController
  def create
    new_params = {
      text: params[:comment][:text],
      card_id: params[:card_id]
    }
    @comment = Comment.new(new_params)

    if @comment.save
      render :create, status: :created
    else
      @error = @comment.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActionController::ParameterMissing
    @error = "Invalid comment data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  private

  def comment_params
    params.require(:comment).permit(:text, :card_id)
  end

end

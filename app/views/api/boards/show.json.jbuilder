json.merge! @board.attributes
json.lists @board.lists
json.lists @board.lists do |list|
  json.merge! list.attributes
  json.cards list.cards do |card|
    json.merge! card.attributes
    json.board_id list.board_id
    json.comment_count card.comments.count
    json.actions card.actions
  end
end

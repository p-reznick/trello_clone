json.merge! @card.attributes
json.board_id @board_id
json.comments_count @card.comments.count
json.comments @card.comments do |comment|
  json.merge! comment.attributes
end
json.actions @card.actions do |action|
  json.merge! action.attributes
end

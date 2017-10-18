json.merge! @board.attributes
json.lists @board.lists
json.lists @board.lists do |list|
  json.merge! list.attributes
  json.cards list.cards
end

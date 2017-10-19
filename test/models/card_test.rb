require 'test_helper'

class CardsUnitTest < ActionDispatch::IntegrationTest
  test "creates a new card" do
    board = Board.create(title: "Badsl;af")
    board_id = board.id
    list = List.create(board_id: board_id, title: "adfasdf", position: 12123.4)
    list_id = list.id
    title = "My new card"
    position = 133.2
    description = "asdfasdfs"
    new_card = Card.new(title: title, list_id: list_id, description: description)
    assert_equal new_card.title, title
    assert_equal description, new_card.description
    assert_equal new_card.list_id, list_id
  end

  test "updates a card" do
    board = Board.create(title: "Badsl;af")
    board_id = board.id
    list = List.create(board_id: board_id, title: "adfasdf", position: 12123.4)
    list_id = list.id
    title = "My new card"
    position = 133.2
    description = "asdfasdfs"
    card = Card.new(title: title, list_id: list_id, description: description)
    new_title = "sdfasdfasdfsdf"
    card.update!(title: new_title)
    assert_equal new_title, card.title
  end
end

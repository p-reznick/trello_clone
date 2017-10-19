require 'test_helper'

class ListsUnitTest < ActionDispatch::IntegrationTest
  test "creates a new list" do
    title = "My new list"
    position = 133.2
    board_id = 10
    new_list = List.new(title: title, position: position, board_id: board_id)
    assert_equal new_list.title, title
    assert_equal new_list.position, position
    assert_equal new_list.board_id, board_id
  end

  test "updates a list" do
    board = Board.create(title: "Bbbbboard")
    board_id = board.id
    new_title = "My new title"
    list = List.new(title: "My old title", board_id: board_id)
    list.update!(title: new_title)
    assert_equal new_title, list.title
  end
end

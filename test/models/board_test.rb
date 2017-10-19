require 'test_helper'

class BoardsUnitTest < ActionDispatch::IntegrationTest
  test "creates a new model" do
    title = "My new board"
    new_board = Board.new(title: title)
    assert_equal new_board.title, title
  end

  test "updates a model" do
    new_title = "My new title"
    board = Board.new(title: "My old title")
    board.update!(title: new_title)
    assert_equal new_title, board.title
  end
end

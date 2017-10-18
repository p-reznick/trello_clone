# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Action.destroy_all
Comment.destroy_all
Card.destroy_all
List.destroy_all
Board.destroy_all

Board.create([{"title":"DevTasks"},{"title":"Chores"},{"title":"Tasks"},{"title":"My newboard"}])

List.create([
  {
    title: "Dev tasks",
    position: 1234.5,
    board_id: Board.first.id
  },
  {
    title: "Backburner dev tasks",
    position: 345.5,
    board_id: Board.first.id
  },
  {
    title: "Other things to do",
    position: 23423.4,
    board_id: Board.all[1].id
  }
]);

Card.create([
    {
      title: "Feed the lawn",
      description: "You know what to do",
      position: 12323.1,
      labels: [
        "red",
        "blue"
      ],
      list_id: List.all[2].id
    },
    {
      title: "Mow the cat",
      description: "Again you know what to do",
      position: 3452.4,
      labels: [],
      list_id: List.all[2].id
    },
    {
      title: "Front end",
      description: "Add event listeners",
      position: 45343.3,
      labels: [],
      list_id: List.all[0].id
    },
    {
      title: "Back end",
      description: "write router",
      position: 3223.2,
      labels: [],
      list_id: List.all[0].id
    }
])

Comment.create([
  {
    text: "Feed the lawn makes no sense",
    card_id: Card.first.id,
  },
  {
    text: "It's all a matter of perspective",
    card_id: Card.first.id,
  },
  {
    text: "blah blah blah blah",
    card_id: Card.first.id
  }
])

Action.create([
  {
    description: "Edited card",
    card_id: Card.first.id
  },
  {
    description: "Edited card",
    card_id: Card.first.id
  },
  {
    description: "Edited card",
    card_id: Card.all[1].id
  }
])

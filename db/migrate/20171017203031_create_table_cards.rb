class CreateTableCards < ActiveRecord::Migration[5.1]
  def change
    create_table :table_cards do |t|
      t.string   :title, nil: false
      t.string   :description
      # labels array
      t.integer  :list_id
      t.float    :position
      t.boolean  :archived
      t.date     :due_date
      t.boolean  :completed
      t.integer  :board_id 
      t.integer  :comments_count
      t.timestamps
      # comments array
      # actions array
    end
  end
end

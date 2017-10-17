class CreateTableLists < ActiveRecord::Migration[5.1]
  def change
    create_table :table_lists do |t|
      t.string :title
      t.float  :position
    end
  end
end

class RenameTableLists < ActiveRecord::Migration[5.1]
  def change
    rename_table :table_lists, :lists
  end
end

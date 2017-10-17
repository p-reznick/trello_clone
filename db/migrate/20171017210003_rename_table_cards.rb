class RenameTableCards < ActiveRecord::Migration[5.1]
  def change
    rename_table :table_cards, :cards
  end
end

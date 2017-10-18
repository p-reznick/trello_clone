class AddColumnLabels < ActiveRecord::Migration[5.1]
  def change
    add_column :cards, :labels, :string, array: true, default: []
  end
end

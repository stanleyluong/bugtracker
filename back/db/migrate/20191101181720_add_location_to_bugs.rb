class AddLocationToBugs < ActiveRecord::Migration[5.2]
  def change
    add_column :bugs, :location, :string
  end
end

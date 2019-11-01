class AddAssignedToToBugs < ActiveRecord::Migration[5.2]
  def change
    add_column :bugs, :assigned_to, :string
  end
end

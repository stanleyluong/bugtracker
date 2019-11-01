class AddSubmittedByToBugs < ActiveRecord::Migration[5.2]
  def change
    add_column :bugs, :submitted_by, :string
  end
end

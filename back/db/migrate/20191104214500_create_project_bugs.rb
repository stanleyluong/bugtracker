class CreateProjectBugs < ActiveRecord::Migration[5.2]
  def change
    create_table :project_bugs do |t|
      t.integer :project_id
      t.integer :bug_id

      t.timestamps
    end
  end
end

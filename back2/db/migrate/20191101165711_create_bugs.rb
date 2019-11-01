class CreateBugs < ActiveRecord::Migration[5.2]
  def change
    create_table :bugs do |t|
      t.string :name
      t.string :priority
      t.string :attachment
      t.string :status
      t.string :description
      t.time :opened
      t.time :closed
      t.time :age
      t.integer :project_id

      t.timestamps
    end
  end
end

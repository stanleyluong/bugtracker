class CreateBugs < ActiveRecord::Migration[5.2]
  def change
    create_table :bugs do |t|
      t.string :name
      t.string :priority
      t.string :submitted_by
      t.string :attachment
      t.string :status
      t.string :description
      t.string :location
      t.time :opened
      t.time :closed
      t.time :age
      t.timestamps
    end
  end
end

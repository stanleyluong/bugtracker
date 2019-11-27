class CreateBugs < ActiveRecord::Migration[5.2]
  def change
    create_table :bugs do |t|
      t.string :name
      t.string :priority
      t.string :attachments, array: true, default: []
      t.string :status
      t.string :description
      t.string :opened
      t.string :age
      t.string :closed
      t.string :submitted_by
      t.string :location
      t.integer :project_id
      t.timestamps
    end
  end
end

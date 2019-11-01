class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.string :role
      t.string :image
      t.integer :project_id
      t.timestamps
    end
  end
end

class CreateUserBugs < ActiveRecord::Migration[5.2]
  def change
    create_table :user_bugs do |t|
      t.integer :user_id
      t.integer :bug_id

      t.timestamps
    end
  end
end

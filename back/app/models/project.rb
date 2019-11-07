class Project < ApplicationRecord
    # belongs_to :user
    # belongs_to :bug
    has_many :user_projects
    has_many :users, through: :user_projects
    has_many :bugs
end

class User < ApplicationRecord
    # has_many :projects
    belongs_to :project
    has_many :user_bugs
    has_many :bugs, through: :user_bugs
end

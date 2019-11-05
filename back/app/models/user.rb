class User < ApplicationRecord
    # has_many :projects
    has_many :user_bugs
    has_many :bugs, through: :user_bugs
end

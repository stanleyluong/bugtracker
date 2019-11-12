class User < ApplicationRecord
    # has_many :projects
    has_many :user_bugs
    has_many :bugs, through: :user_bugs
    has_many :user_projects
    has_many :projects, through: :user_projects
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }
end

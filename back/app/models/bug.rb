class Bug < ApplicationRecord
    belongs_to :project
    has_many :user_bugs
    has_many :users, through: :user_bugs
end

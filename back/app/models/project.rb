class Project < ApplicationRecord
    # belongs_to :user
    # belongs_to :bug
    has_many :users
    has_many :bugs
end

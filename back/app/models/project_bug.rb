class ProjectBug < ApplicationRecord
    belongs_to :project
    belongs_to :bug
end

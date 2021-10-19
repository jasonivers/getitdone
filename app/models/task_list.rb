class TaskList < ApplicationRecord
  has_many :tasks
  has_many :memberships, as: :owner
  belongs_to :project
end

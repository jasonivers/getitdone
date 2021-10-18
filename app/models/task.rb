class Task < ApplicationRecord
  has_many :notes, as: :owner
  belongs_to :task_list
  belongs_to :user
end

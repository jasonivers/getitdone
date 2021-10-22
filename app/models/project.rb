class Project < ApplicationRecord
  has_many :task_lists
  has_many :documents
  has_many :memberships, as: :owner
end

class Document < ApplicationRecord
  belongs_to :project
  has_many :notes, as: :owner
  has_many :memberships, as: :owner
  has_one_attached :file
end

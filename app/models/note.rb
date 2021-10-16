class Note < ApplicationRecord
  belongs_to :user
  belongs_to :owner
  has_one_attached :file
end

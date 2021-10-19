class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable, :doorkeeper
  has_many :access_grants, class_name: 'Doorkeeper::AccessGrant', foreign_key: :resource_owner_id, dependent: :delete_all # or :destroy if you need callbacks 
  has_many :access_tokens, class_name: 'Doorkeeper::AccessToken', foreign_key: :resource_owner_id, dependent: :delete_all # or :destroy if you need callbacks
  has_many :notes
  has_many :tasks
  has_many :memberships
  has_many :projects, through: :memberships, source: :memberable, source_type: 'Project'
  has_many :task_lists, through: :memberships, source: :memberable, source_type: 'TaskList'
  has_one_attached :avatar
end

class Post < ApplicationRecord
  acts_as_paranoid
  belongs_to :user
  validates :user_id, :post, presence: true
end

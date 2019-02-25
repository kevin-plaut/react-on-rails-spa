class Post < ApplicationRecord
  belongs_to :user
  validates :user_id, :post, presence: true
end

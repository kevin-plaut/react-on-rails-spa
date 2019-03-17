class Post < ApplicationRecord
  acts_as_paranoid
  belongs_to :user, foreign_key: "user_id"
  validates :user_id, :image_url, :comment, presence: true
end

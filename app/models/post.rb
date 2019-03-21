class Post < ApplicationRecord
  acts_as_paranoid
  belongs_to :user, foreign_key: "user_id"
  validates_presence_of :user_id, :image_url, :comment
  validates_length_of :comment, maximum: 140
end

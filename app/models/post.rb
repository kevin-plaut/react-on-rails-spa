class Post < ApplicationRecord
  acts_as_paranoid
  belongs_to :user, foreign_key: "user_id", inverse_of: :posts
  validates_presence_of :user_id, :comment
  serialize :photo, Hash

  has_attached_file \
  :photo,
  styles: { thumb: ['32x32#', 'jpg'] },
  convert_options: {
    all: '-interlace Plane'
  },
  default_url: '/images/default_:style_photo.png'

  validates_attachment_presence :photo
  validates_attachment_file_name :photo, matches: [/png\Z/, /jpe?g\Z/, /gif\Z/]
end

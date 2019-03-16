class PostSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :comment, :created_at, :updated_at, :last_login, :deleted_at, :user_id, :user
  def user
    self.object.user.map do |user| {
      name: user.name
    }
    end
  end
end

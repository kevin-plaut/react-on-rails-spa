class PostsController < ApplicationController
  before_action :authenticate_user
  # skip_before_action :authenticate_user

  def index
    posts = Post.all
    render json: posts
  end

  def create
    new_post = Post.new(post_params)
    if new_post.save
      payload = {
        user_id: user_id,
        post: new_post
      }
      render json: payload, status: 201
    else
      render json: {errors: new_post.errors}, status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:user_id)
  end
end

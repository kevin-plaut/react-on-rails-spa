class PostsController < ApplicationController
  before_action :authenticate_user, except: [ :index, :create ]
  # before_action :authenticate_user

  def index
    posts = Post.all
    render json: posts
  end

  def create
    post = Post.new(post_params)
    if post.save
      payload = {
        post: post
      }
      render json: payload, status: 201
    else
      render json: {errors: post.errors}, status: 422
    end
  end

  private

  def post_params
    params.require(:new_post).permit(:user_id, :post)
  end
end

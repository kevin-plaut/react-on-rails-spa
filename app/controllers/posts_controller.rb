class PostsController < ApplicationController
  before_action :authenticate_user, except: [ :index, :create ]

  def index
    posts = Post.all
    render json: posts
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: post, status: 201
    else
      render json: {errors: post.errors}, status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:user_id, :post)
  end
end

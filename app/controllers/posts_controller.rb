class PostsController < ApplicationController
  before_action :authenticate_user

  def index
    posts = Post.all
    render json: posts
  end

  def create
    post = Post.create(post_params)
    if post.valid?
    render json: post
   else
     render json: post.errors, status: :unprocessable_entity
   end
  end

  private

  def post_params
    params.require(:post).permit(:post)
  end
end

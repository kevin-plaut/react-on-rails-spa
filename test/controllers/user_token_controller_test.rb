require 'test_helper'

class UserTokenControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get user_token_new_url
    assert_response :success
  end

end

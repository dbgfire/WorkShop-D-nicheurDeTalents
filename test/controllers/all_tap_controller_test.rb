require 'test_helper'

class AllTapControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get all_tap_index_url
    assert_response :success
  end

end

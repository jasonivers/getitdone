class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  def react_rails_test
  end
end

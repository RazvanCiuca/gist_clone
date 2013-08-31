class RootController < ApplicationController
  def root
    p 'Current User !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
    p current_user
    if !current_user
      p 'should be redirecting'
      redirect_to new_session_url
    else
      render :index
    end
  end
end

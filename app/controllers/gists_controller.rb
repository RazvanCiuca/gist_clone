class GistsController < ApplicationController
  def index
    @gists = Gist.all
    @faves = current_user.favorites
    render "gists.rabl"
  end

  def create
    params[:owner_id] = current_user.id
    @gist = Gist.new(params[:gist])
    if @gist.save
      render :json => @gist
    else
      render :json => "Fail", :status => 422
    end
  end
end

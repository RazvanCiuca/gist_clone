class FavoritesController < ApplicationController
  def create
    @new_fave = current_user.favorites.build(:gist_id => params[:gist_id])
    if @new_fave.save
      render :json => @new_fave
    else
      render :json => @new_fave, :status => 422
    end
  end

  def destroy
    @fave = Favorite.find_by_user_id_and_gist_id(current_user.id, params[:gist_id])
    @fave.destroy
    render :json => true, :status => 200
  end
end

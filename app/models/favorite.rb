class Favorite < ActiveRecord::Base
  attr_accessible :gist_id, :user_id

  belongs_to :gist, :class_name => 'Gist', :foreign_key => :gist_id
  belongs_to :user, :class_name => 'User', :foreign_key => :user_id

  validates :user_id, :uniqueness => {:scope => :gist_id}
end

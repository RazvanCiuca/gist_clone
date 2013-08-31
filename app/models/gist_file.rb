class GistFile < ActiveRecord::Base
  attr_accessible :body, :gist_id, :name

  belongs_to :gist, :class_name => "Gist", :foreign_key => :gist_id
end

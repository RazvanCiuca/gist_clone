class Gist < ActiveRecord::Base
  attr_accessible :owner_id, :title, :gist_files_attributes

  belongs_to :owner, :class_name => "User", :foreign_key => :owner_id
  has_many :gist_files, :class_name => "GistFile", :foreign_key => :gist_id, :dependent => :destroy

  accepts_nested_attributes_for :gist_files
end

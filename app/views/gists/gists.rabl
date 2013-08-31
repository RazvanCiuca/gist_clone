collection @gists
attributes :id, :title, :owner_id

node(:favorite) do |gist|
	end_val = nil
	 @faves.each do |fave|
	 	 if fave.gist_id == gist.id
		 	 end_val = fave.as_json
			 break
		 end
	 end
	end_val
end


node(:gist_files_attributes) do |gist|
	gistFiles = []
	gist.gist_files.each do |gist_file|
		gistFiles << gist_file.as_json
	end

	gistFiles
end
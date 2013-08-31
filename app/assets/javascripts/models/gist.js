Gists.Models.Gist = Backbone.Model.extend({
	parse: function(data) {
	    data.favorite = new Gists.Models.Favorite(data.favorite);
			data.gist_files_attributes = new Gists.Collections.GistFiles(data.gist_files_attributes);
	    return data;
	},

	toJSON: function() {
		var copy = _.clone(this);
		copy.unset('favorite');
		return copy.attributes;
	},

	url: "/gists"


});

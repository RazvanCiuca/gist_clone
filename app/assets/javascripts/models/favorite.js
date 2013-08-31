Gists.Models.Favorite = Backbone.Model.extend({
	url: function() {
		return "/gists/" + this.get('gistId') + "/favorite";
	}
});

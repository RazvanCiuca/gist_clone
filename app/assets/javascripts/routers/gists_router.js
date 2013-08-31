Gists.Routers.Gists = Backbone.Router.extend({
	routes: {
		"" : "indexGists",
		"new" : "newGist",
		"gists/:id/edit" : "editGist"
	},

	initialize: function(inits) {
		this.gists = inits.gists;
		this.main = inits.main;
	},

	indexGists: function() {
		var view = new Gists.Views.GistsIndex({
			collection: this.gists
		});
		this.main.html(view.render().$el);
	},

	newGist: function() {
		var view = new Gists.Views.GistsForm({
		});
		this.main.html(view.render().$el);
	},

	editGist: function(id) {
		var view = new Gists.Views.GistsEdit({
			model: this.gists.get(id)
		});
		this.main.html(view.render().$el);
	}

});

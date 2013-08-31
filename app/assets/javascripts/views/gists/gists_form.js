Gists.Views.GistsForm = Backbone.View.extend({

  template: JST['gists/form'],
	gistFileTemplate: JST['gists/gistFilePart'],

	events: {
		"click #newGistSubmit" : "newGistHandler",
		"click #addGistFile" : "addGistFile"
	},

	initialize: function(inits) {
		this.collection = inits.collection;
		this.i = 0;
	},

	render: function() {
		var renderedTemplate = this.template({		})
		this.$el.html(renderedTemplate);
		var renderedTemplate = this.gistFileTemplate({ i: this.i });
		this.i += 1;
		this.$el.find('#title').after(renderedTemplate);
		return this;
	},

	newGistHandler: function(event) {
		event.preventDefault();
		var that = this;

		var attrs = $('form').serializeJSON();
		var newGist =	new Gists.Models.Gist();
		this.collection.add(newGist);
		console.log(attrs);
		newGist.save(attrs, {
			success: function(gist) {
				Backbone.history.navigate("", {trigger: true});
			}
		});
	},

	addGistFile: function(event) {
		event.preventDefault();
		var that = this;
		var renderedTemplate = this.gistFileTemplate({ i: this.i });
		this.$el.find('#text-'+(this.i-1)).after(renderedTemplate);
		this.i += 1;
	}

});

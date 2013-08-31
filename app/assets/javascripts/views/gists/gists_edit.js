Gists.Views.GistsEdit = Backbone.View.extend({

  template: JST['gists/edit_form'],
	gistFileTemplate: JST['gists/gistFilePartEdit'],

	events: {
		"click #newGistSubmit" : "newGistHandler",
		"click #addGistFile" : "addGistFile"
	},

	initialize: function() {
		this.i = 0;
	},

	render: function() {
		var renderedTemplate = this.template({ gist: this.model })
		var that = this;
		this.$el.html(renderedTemplate);
		this.model.get('gist_files_attributes').each(function(gistFile) {
			var renderedTemplate = that.gistFileTemplate({ gistFile: gistFile, i:that.i });
			that.i += 1;
			that.$el.find('#title').after(renderedTemplate);
		});


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

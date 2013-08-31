Gists.Views.GistsShow = Backbone.View.extend({

  template: JST['gists/show'],

	events: {
		"click .favoriteButton" : "favoriteHandler",
		"click .unFavoriteButton" : "unFavoriteHandler",
		"click .edit" : "edit"
	},

	initialize: function(inits) {
		this.model = inits.model;
		this.collection = inits.collection;
		this.i = inits.i;

		var reRender = function(){
			this.render();
		}
		this.listenTo(this.model, "change", reRender);
	},

	render: function() {
		var isFavorited = this.model.get('favorite').get('gist_id') ? true : false;

		var renderedTemplate = this.template({
			gist: this.model,
			i: this.i,
			isFavorited: isFavorited
		})
		this.$el.html(renderedTemplate);
		return this;
	},

	favoriteHandler: function(event) {
		event.preventDefault();
		var that = this;
		var gistId = $(event.currentTarget).attr('data-id');
		var fave = new Gists.Models.Favorite();
		fave.set({'gistId': gistId});
		fave.save({},{
			success: function(response) {
				that.model.set('favorite', fave);
			},
			error: function(response) {
				alert('Failed to favorite');
			}
		});
	},

	unFavoriteHandler: function(event) {
		event.preventDefault();
		var that = this;
		var gistId = $(event.currentTarget).attr('data-id');
		var fave = this.model.get('favorite');
		fave.destroy({
			success: function(response) {
				that.model.set('favorite', new Gists.Models.Favorite() );
			},
			error: function(response) {
				alert('Failed to unfavorite');
			}
		});
	},

	edit: function(event) {
		event.preventDefault();
		var id = $(event.currentTarget).attr('data-id');
	  Backbone.history.navigate('/gists/'+ id +'/edit', {trigger: true});
	}

});

Gists.Views.GistsIndex = Backbone.View.extend({

  template: JST['gists/index'],

	initialize: function() {

	},

	render: function() {
		var $index = this.$el
		var renderedTemplate = this.template({
			gists: this.collection
		})
		$index.html(renderedTemplate);

		var that = this;
		this.collection.each(function(gist,i){
			detail = new Gists.Views.GistsShow({ i:i, collection: that.collection, model: gist});
			$index.find('.index').append(detail.render().$el);
		})


		return this;
	}

});

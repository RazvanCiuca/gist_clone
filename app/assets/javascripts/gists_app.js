window.Gists = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($mainDiv) {
    var gists = new Gists.Collections.Gists();
		gists.fetch({
			success: function() {
				var router = new Gists.Routers.Gists({
					gists: gists,
					main: $mainDiv
				});
				Backbone.history.start();
			}
		});

  }

};

$(document).ready(function(){
  Gists.initialize($('.main'));
});

jQuery(function($) {
	jQuery.fn.prepare_links = function() {

		var current_host = new RegExp(window.location.host);

		return this.each(function(){
			a = $(this);

			if (a.attr('href') != undefined && a[0].host != undefined) {
				host = a[0].host;

				// external links should open in new window
				if(!current_host.test(host)) {
					a.attr({ target : "_blank" });
				}
			}
		});
	};
});
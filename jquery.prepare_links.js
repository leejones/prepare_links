jQuery(function($) {
	jQuery.fn.prepare_links = function(user_options) {
		var options = {
			subdomains_are_external : false,
			additional_internal_sites : []
		};
		$.extend(options, user_options);
		var current_host = new RegExp(window.location.host),
				is_localhost = new RegExp('localhost'),
				has_subdomain = new RegExp('(?:https?:\/\/)?.*\.' + location.host),
				other_internal_sites = [];
		
		$.each(options.additional_internal_sites, function(index, element) {
			var domain = element.replace(/(https?):\/\//, '' );
			other_internal_sites.push(new RegExp(domain));
		});
		
		return this.each(function(){
			
			var link = $(this),
					host = link[0].host,
					is_internal_site = false;
			
			$.each(other_internal_sites, function(index, element) {
				if (element.test(host)) {
					is_internal_site = true;
				}
			});

			if (link.attr('href') != undefined && link[0].host != undefined) {
				if(!current_host.test(host) && !is_localhost.test(host) && !is_internal_site) {
					link.attr({ target : "_blank" });
				}
				else if (has_subdomain(host) && options.subdomains_are_external) {
					link.attr({ target : "_blank" });
				}
			}
		});
	};
});
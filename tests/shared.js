var UnitTest = {
	setup : {
		links : function(urls) {
			var $sandbox = $("#sandbox");
			$.each(urls, function(index, url) {
				$sandbox.append('<a href="'+ url.url + '" class="link" id="'+ url.id +'">'+ url.id +'</a>');
			});
		},
		sandbox : function() {
			var $sandbox = $("#sandbox");
			if ($sandbox.length == 0) {
				$("body").append('<div id="sandbox" style="display:none;"/>');
			}
			else {
				console.error("Sandbox already defined");
			}
		}
	},
	teardown : {
		links : function() {
			
		},
		sandbox : function() {
			var $sandbox = $("#sandbox");
			if ($sandbox.length != 0) {
				$sandbox.remove();
			}			
		}
	}
};
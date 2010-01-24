$(document).ready(function() {
	test("Basic plugin tests", function() {
		ok($("a").prepare_links(), "Should respond as jQuery plugin.");
	});
	
	test("Should open external links in new window.", function() {
		UnitTest.setup.sandbox();
		UnitTest.setup.links([
			{id : 'google', url : 'http://google.com'},
			{id : 'current_domain', url : window.location.host},
			{id : 'relative_path', url : 'relative/path/'},
			{id : 'absolute_path', url : '/absolute/path/'},
			{id : 'subdomain', url : 'http://subdomain' + window.location.host},
			{id : 'localhost', url : 'http://localhost'},
			{id : 'localhost3000', url : 'http://localhost:3000'}
		]);
		
		$("#sandbox a").prepare_links();
		
		equal($("#google").attr('target'), "_blank", "Target should be _blank");

		equal($("#current_domain").attr('target'), "", "Target should be empty for current domain");
		equal($("#relative_path").attr('target'), "", "Target should be empty for relative path");
		equal($("#absolute_path").attr('target'), "", "Target should be empty for absolute path");
		equal($("#localhost3000").attr('target'), "", "Target should be empty for local host with subdomain");
		equal($("#localhost").attr('target'), "", "Target should be empty for localhost");
		equal($("#localhost3000").attr('target'), "", "Target should be empty for local host with port");
		
		UnitTest.teardown.sandbox();
	});
});

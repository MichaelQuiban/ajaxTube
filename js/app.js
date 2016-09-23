// Key 
// AIzaSyC3V8D2JAlnTsGCKgMi_VHUzgSTjfvWWxQ	
$(document).ready(function() {
	$("#search-form").submit(function(e) {
		e.preventDefault();
		var search = $("#search").val();
		console.log(search);
	});
});

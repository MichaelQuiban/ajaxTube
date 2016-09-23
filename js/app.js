// Key 
// AIzaSyC3V8D2JAlnTsGCKgMi_VHUzgSTjfvWWxQ	
$(document).ready(function() {
	function runSearch(search) {
		var url = 'https://www.googleapis.com/youtube/v3/search';
		var params = {
			part:'snippet',
			key: 'AIzaSyC3V8D2JAlnTsGCKgMi_VHUzgSTjfvWWxQ',
			q: search 
		}
		$.getJSON(url, params, function(data) {
			//Function show results/items/array
			console.log(data);
		});
	}

	$("#search-form").submit(function(e) {
		e.preventDefault();
		var search = $("#search").val();
		runSearch(search);
	});
});

// Key: AIzaSyC3V8D2JAlnTsGCKgMi_VHUzgSTjfvWWxQ
// URL: https://www.googleapis.com/youtube/v3/search

$(document).ready(function() {
	function runSearch(search) {
		var url = 'https://www.googleapis.com/youtube/v3/search';
		var params = {
			part:'snippet',
			key: 'AIzaSyC3V8D2JAlnTsGCKgMi_VHUzgSTjfvWWxQ',
			q: search 
		}
		$.getJSON(url, params, function(data) {
			var results = data.items;
			var dataLength = results.length;
					//Iterate through the results.
				for ( var i = 0; i < dataLength; i++) {
					//Show the results so I don't forget.
					console.log(dataLength);
					console.log(results);
					//Append these dang results.
					$("#results").append("<p> Channel Title:</p>" + results[i].id.videoId + "<br>");
					//$("#results").append("<p> Channel Title:</p>" + results[i].snippet.description + "<br>");
					//$("#results").append("<p> Channel Title:</p>" + results[i].snippet.publishedAt + "<br>");
					//$("#results").append("<p> Channel Title:</p>" + results[i].snippet.channelTitle + "<br>");
				};
		});
	}

//Empty the form and grab the query performed by the user.
	$("#search-form").submit(function(e) {
		e.preventDefault();
		$("#results").empty();
		var search = $("#search").val();
		runSearch(search);
	});
});

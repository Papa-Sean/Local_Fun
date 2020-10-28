$( document ).ready(function(){

    // created settings for the api call
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-193.p.rapidapi.com/statistics",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "e3a14c6729mshda36173e5fbd4b6p1cf32fjsn3baecbc37181"
	}
}

// ajax call for the api info
$.ajax(settings).done(function (response) {
    var widget = show(response);
    $("#covid-holder").html(widget);
});
// function that displays the info to the page
function show(response){
    return "<h3><strong>COVID STATS FOR</strong>:<br> " + response.response[3].country +  "</h3>"+
    "<h4><strong>STATS FOR</strong>:<br> " + response.response[3].day + "</h4><br>" +
    "<h4><strong>New Cases</strong>:<br> " + response.response[3].cases.new + "</h4><br>" +
    "<h4><strong>New Deaths</strong>:<br> " +response.response[3].deaths.new + "</h4>"
    }
});
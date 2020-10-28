$( document ).ready(function(){


$.ajax({

    url: "https://api.openweathermap.org/data/2.5/find?q=detroit&units=imperial" + "&APPID=a35dfc04904724a33f92bb9a5d159a73",
    type: "GET",
    dataType: "jsonp",
    success: function(data){
        var widget = show(data);

        $("#show").html(widget);
    }
})})
function show(data) {
    return "<h5><strong>Weather For</strong>:<br> " + data.list[0].name +  "</h5>" +
    "<h5><strong>Temp</strong>:<br> " + data.list[0].main.temp + " &deg;F<img src='https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png'></h5>" +
    "<h5><strong>Humidity</strong>:<br> " + data.list[0].main.humidity + "%</h5>" +
    "<h5><strong>Wind Speed</strong>:<br> " + data.list[0].wind.speed + "mph</h5>" ;
};
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

$.ajax(settings).done(function (response) {
    var widget = show(response);
    $("#covid-holder").html(widget);
});
function show(response){
    return "<h3><strong>COVID STATS FOR</strong>:<br> " + response.response[3].country +  "</h3>"+
    "<h4><strong>STATS FOR</strong>:<br> " + response.response[3].day + "</h4><br>" +
    "<h4><strong>New Cases</strong>:<br> " + response.response[3].cases.new + "</h4><br>" +
    "<h4><strong>New Deaths</strong>:<br> " +response.response[3].deaths.new + "</h4>"
    ;
    


};
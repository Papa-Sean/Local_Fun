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
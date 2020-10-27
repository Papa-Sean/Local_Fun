// variablesx

let city = '';
let eventType = '';
let searchCity = $('#ev-search-city');
let searchType = $('#ev-search-type');
let searchBtn = $('#ev-search-btn');
let evClearBtn = $('#ev-clr-search-btn');

const when = "today"

// function for formating the type and city

function displayEvents(event) {
	event.preventDefault();
	if (searchCity.val().trim() !== '' && searchType.val().trim() !== '') {
		city = searchCity.val().trim();
		eventType = searchType.val().trim();
		currentEvents(city);
	}
}

// function used to clr the previous divs

function clrDivs(event) {
	event.preventDefault();
	for (i = 0; i < 10; i++) {
		$('#events-holder').empty();
		$('#event'+(i)).remove();
	}
}

// function that contacts the api and displays the info 

function currentEvents(city) {
	var queryURL= "http://api.eventful.com/json/events/search?keywords=" + eventType + "&l=" + city + '&t=' + when +"&app_key=vHq2Db6bmLLHW26k";
	console.log(queryURL);
		$.ajax({
			url:queryURL,
			method:"GET",
			dataType: "jsonp"
		}).then(function(response){

				// checks to see if the response was properly retreived

				if (!response.events) { 
					$('#events-holder').append('<div id="ev-failed-search" class="card">Search Failed. Please clear search and try a new location or type</div>');
				}  else  

				// loop that builds the elements for the event section

				{ for (i = 0; i< 10; i++) {
				let evTitle = response.events.event[i].title;
				let evStart = response.events.event[i].start_time;
				let trudate = new Date(evStart);
				let evUrl = response.events.event[i].url;
				let regName = response.events.event[i].region_abbr;
				let venueAdd = response.events.event[i].venue_address;
				let venueCity = response.events.event[i].city_name;
				let venueName = response.events.event[i].venue_name;
				let venueUrl = response.events.event[i].venue_url;

				// create the divs that display api info

				$('#events-holder').append('<div class="my-eventcard" id="event'+(i)+'"></div>');
				$('#event'+(i)).addClass('card');
				$('#event'+(i)).addClass('column');
				$('#event'+(i)).append('<div id="ev-title">Event Title: ' + evTitle +'</div>');
				$('#event'+(i)).append('<p id="ev-start-time' + (i) + '">Date and time: ' + trudate + '</di>');
				$('#event'+(i)).append('<span>Venue:</span> <a id="venue-name ' + (i) +'" href="'+ venueUrl+'">' + venueName +'</a>');
				$('#event'+(i)).append('<p id="ev-venue-address ' + (i) +'"> Address: ' + venueAdd + ' ' + venueCity + ', ' + regName +'</p>');
				$('#event'+(i)).append('<a id="ev-ticket-btn" class="button is-link" href="' + evUrl + '">Get Tickets</a>');
				$('#events-holder').append('<br>');
				}
			} 
		});
	}

	// button events calls

	$('#ev-search-btn').on('click',displayEvents)
	$('#ev-clr-search-btn').on('click',clrDivs);
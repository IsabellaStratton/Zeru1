var tempMode = 1;



function getWeather(lat, lon) {
  var apiURI = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=ce75790bff3a619272e05ecee37d6ba7";

  $.ajax({
    url: apiURI,
    dataType: "json",
    type: "GET",
    async: "false",
    success: function(resp) {
		
		
		console.log(resp.name);
		$("#current-location").append(resp.name);
		
		console.log(resp.main);
		$("#current-main").append(resp.main.temp.+ "°");
		console.log(resp.main);
		$("#current-main1").append(resp.main.pressure);
		console.log(resp.main);
		$("#current-main2").append(resp.main.humidity+ "%");
		
		
		
		console.log(resp.wind);
		$("#current-wind").append(resp.wind.speed);
		
		console.log(resp.clouds);
		$("#current-clouds").append(resp.clouds.all);
		
		
		console.log(resp.main);
		$("#current-main3").append(resp.main.temp.eve);
		
		
   
    },
    error: function(resp) {
       alert("Error: " + e);
       clearInterval(updateinter);
    }
  });
}

function getLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      getWeather(position.coords.latitude, position.coords.longitude);
    })
  } else {
    alert("geolocation not available" + e);
    clearInterval(updateinter);
  }
}
var i = 0;
var updateinter = setInterval(function(){
  console.log("iteration# " + i++);
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      getWeather(position.coords.latitude, position.coords.longitude);
    })
  } else {
    alert("geolocation not available" + e);
  }
}, 300000);



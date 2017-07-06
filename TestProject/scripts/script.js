// mapp.addListener ('click', function(e) {
//   console.log(e.latlng.toJSON());
//})
// Grabs the lat and long where user clicked.

$(function(){
  var mapOptions = {
    zoom: 5,
    center: new google.maps.LatLng(54.5668946, -3.4403503),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  // Where on the website the map is going to display.
  var canvas = $("#map")[0];
  var map = new google.maps.Map(canvas, mapOptions);

});
// You can grab elements of the maps without calling the entire map.
// 10,000 requests per month otherwise you have to pay.
// Alternative is open street map.
// There are 20 levels of zooming on a map and all works in tiles.
// Download the area that you would like to represent first and host it in your server.
// You can even use geolocation!! Whaaa?!
// You need an API key in order to be authenticised to access the data.

$(function(){
  var searchInput = $("#searchbox");
  // Returns an array.

  // google is the object provided by the api. Here we are tapping into the object and libraries.
  // The reason they are all low caps is because they are libraries. Large caps because it is a specific library.
  // And we call the first element in the array.
  var placesInput = new google.maps.places.SearchBox(searchInput[0]);
  // Bam, we can imput every place in the world! And it was just two lines.
  // YOu can limit the options by adding , {and your parameters here} at the end of [0].


  // Let's create our own object.
  function myMap(){
    // init just means initialize

    // First let's declare a function.
    this.init = function(){
      var _this = this;

      // Let's define how the map loads first.
      var mapOptions = {
        zoom: 8,
        // We call new here to self contain it because we might want to get another LatLng later.
        center: new google.maps.LatLng(51.515401, -0.071882),
        // This is just a value which is why we don't need to make it self contained.
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      // Our canvas is going to be in the div with the id googleMap.
      var canvas = $("#googleMap")[0];
      // First where the map is going to be, then how we want it displayed.
      this.map = new google.maps.Map(canvas, mapOptions);

      // Only grab geolocation when a user clicks on the where am i button.
      $("#whereami").on("click", function(){
        _this.geoLocation()
      })
    }

      // Let's make the map actually change when we select a place.
      // Almost like add event listener but this one is from google.
      // We are listening for an even on placeInfut.
      // More specifically places_changed (that is the name of the event, same as saying click).
      // Then we want to run a function.
      this.updateMapView = function(){
        // To fix the scope error. We are storying this in this function as _this.
        var _this = this;

        google.maps.event.addListener(placesInput, 'places_changed', function(){
        var places = placesInput.getPlaces();
        for(var i = 0; i < places.length; i++){
          var place = places[i];

          // We have created an object called Bounds so google maps can figure out what to show on the map.
          var bounds = new google.maps.LatLngBounds();
          
          // Create a marker.
          var marker = new google.maps.Marker({
            // Attach the marker to the map.
            map: _this.map,
            // There is a name for every object so let's reuse it.
            title: place["name"],
            // Go into the API call and we will see the lat and long is contained within geometry and loaction.
            position: place.geometry.location // It is an object coming back from google.
          });

          // This is going to recenter the map by defining the new bounds.
          bounds.extend(place.geometry.location);

        }

        // Make the map fit the bounds.
        _this.map.fitBounds(bounds)

      })

    }

    // Navigator object is quite badass. It's above the window and includes a lot of APIs and functionalities.
    // Eg all the languages your machine is configured in. The language. The bluetooth. Camera. Geoloation..
    // All the possibilities!
    this.geoLocation = function(){
      var _this = this;
      navigator.geolocation.getCurrentPosition(
        // Watch out two functions... Whaaa?!
        function(position){
          //console.log(position);
          // A game you can only play when you are at a high enough altitute.

          var coords = position.coords; // grab the coordinates from the API.
          var marker = new google.maps.Marker({
            map: _this.map, // We need to redefine _this.
            title: "You are here.",
            // Reeinject coordinates into a google object.
            position: new google.maps.LatLng(coords.latitude, coords.longitude)
          });
          // Change the zoom
          _this.map.setZoom(17)
        }, // Called every time the location is updated
        function(){} // Called when location is unavailable.
        );
    }

    // Then we call the function.
    this.init();

    // Update the map to the new location
    this.updateMapView();
  }

  // Initialise an object by doing:
  new myMap();
  // It's a self contained object. It just means a function that is executed.
  // When you do . it defines the scope to only that object. So you can call things the same name as long as it's after the . .
  // You have to say new at first because it's what closes the environment so it doesn't overwrite the original function.

})
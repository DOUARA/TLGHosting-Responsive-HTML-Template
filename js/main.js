/* map */ 
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.503691, lng: -0.119564},
    zoom: 14
  });
  var marker = new google.maps.Marker({
    position: {lat: 51.503691, lng: -0.119564},
    map: map
  });
}

/* Navbar toggle css class */
$('#toggle').click(function() {
          $(this).next('.nav').toggleClass("is-collapsed-mobile");
});
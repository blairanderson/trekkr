var configureMap = function() {
    // sets up the map base

    var map = L.mapbox.map('map', 'thesteady.map-ygc6vvpt');
    map.setView([36.7, -119.3], 5);

    map.markerLayer.on('ready', function(e) {
      // The GeoJSON representing the point features
      var geoJson = $('#map').data('points');
      map.markerLayer.setGeoJSON(geoJson);

  // Listen for individual marker clicks
  map.markerLayer.on('click',function(e) {
      e.layer.unbindPopup();

      var feature = e.layer.feature;
      var info =
                  '<img class="photo" src="' + feature.properties.url + '" width="325">' +
                  '<p class="credit"> Photo Credit: Instagram user <span class="username">' + feature.properties.title + '</span></p>' +
                 '<div class="more">' + feature.properties.description + '</div>'
                 ;

      document.getElementById('info').innerHTML = info;
  });

  // Clear the tooltip when map is clicked
  map.on('click',function(e){
      document.getElementById('info').innerHTML = '';
  });
      });
    };
  
  $(document).ready(configureMap);
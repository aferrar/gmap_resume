
var map;
$(document).ready(function initMap() {

  // Create a new StyledMapType object, passing it an array of styles,
  // and the name to be displayed on the map type control.
 
 /* var satelliteMapType = new google.maps.satelliteMapType(
      [
        {
          featureType: "all",
          elementType: "labels",
            stylers: [
            {visibility: "off"}
            ]
        }]
      ,
      {name: "Satellite Map"});
*/
  var styledMapType = new google.maps.StyledMapType(
      [
        {
          featureType: "all",
          elementType: "labels",
          stylers: [
        { visibility: "off" }
          ]
        }]
      ,
      {name: 'Styled Map'});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
   map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.763377, lng: -73.994049},
    zoom: 12,
    mapTypeControlOptions: {
    mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
              'styled_map']
    }
  });

  var iconBase = 'assets/images/';
  var icons = {
    hunter: {
      name: 'HUNTER COLLEGE',
      icon: iconBase + 'hunter_marker.svg'
    },
    psu: {
      name: 'PENN STATE UNIVERSITY',
      icon: iconBase + 'psu_marker.svg'
    },
    ccny: {
      name: 'CITY COLLEGE OF NY',
      icon: iconBase + 'ccny_marker.svg'
    },
    hsmse: {
      name: 'HS MATH,SCI,ENGINEERING' ,
      icon: iconBase + 'hsmse_marker.svg'
    },
    nyrp: {
      name: 'NEW YORK RESTORATION PROJECT' ,
      icon: iconBase + 'nyrp_marker.svg'
    },
    atlas: {
      name: 'ATLAS ENVIRONMENTAL LABORATORY' ,
      icon: iconBase + 'atlas_marker.svg'
    },
    telepathy: {
      name: 'TELEPATHY STARTUP' ,
      icon: iconBase + 'telepathyblk_marker.svg'
    },
    juliarosa: {
      name: 'JULIA ROSA FLORAL EVENT DESIGN' ,
      icon: iconBase + 'juliarosa_marker.svg'
    },
    local153: {
      name: 'OPEIU: LOCAL 153' ,
      icon: iconBase + 'local153_marker.svg'
    },
  };

  function addMarker(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
      
    });

    marker.addListener('click', function(){
        map.panTo(marker.getPosition());
        map.setZoom(19);
        map.setMapTypeId('satellite');
        map.marker.setVisible(false);
      });
  };

  $(".back_to_contacts").click(function() {
    map.panTo({lat: 40.763377, lng: -73.994049});
    map.setZoom(12);
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map'); 
  });

  $(".legend_item_descrip").click(function(feature) {
    var target = this.rel;
    for (var i=0, feature; feature = features[i]; i++) {
      if (feature.type === target) {
          map.panTo(feature.position);
          map.setZoom(19);
          map.setMapTypeId('satellite');
      }
    }

  })

  var features = [
    {
      position: new google.maps.LatLng(40.768599, -73.964729),
      scaledSize: new google.maps.Size(25, 25),
      type: 'hunter'
    }, {
      position: new google.maps.LatLng(40.8021458633399, -77.8670942478257),
      scaledSize: new google.maps.Size(25, 25),
      type: 'psu'
    }, {
      position: new google.maps.LatLng(40.820438, -73.948983),
      scaledSize: new google.maps.Size(25, 25),
      type: 'ccny'
    }, {
      position: new google.maps.LatLng(40.821587, -73.949516),
      scaledSize: new google.maps.Size(50, 50),
      type: 'hsmse'
    }, {
      position: new google.maps.LatLng(40.856926, -73.921887),
      scaledSize: new google.maps.Size(25, 25),
      type: 'nyrp'
    }, {
      position: new google.maps.LatLng(40.753261, -73.991504),
      scaledSize: new google.maps.Size(25, 25),
      type: 'atlas'
    }, {
      position: new google.maps.LatLng(40.703299, -73.987807),
      scaledSize: new google.maps.Size(25, 25),
      type: 'telepathy'
    }, {
      position: new google.maps.LatLng(40.746314, -73.991736),
      scaledSize: new google.maps.Size(25, 25),
      type: 'juliarosa'
    }, {
      position: new google.maps.LatLng(40.737143, -73.996844),
      scaledSize: new google.maps.Size(5, 5),
      type: 'local153'
    },

    
  ];

  for (var i = 0, feature; feature = features[i]; i++) {
    addMarker(feature);
  }

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map'); 

});


  //Legend navigation logic
$(document).ready(function() {
  $("nav a").click(function() {
    var target = this.rel;
    $("#legend_content dl").hide();
    $("#"+target+"_content").fadeIn(1500);
    $("nav button").css({"background-color": "black", "color": "white"});
    $("#"+target+"_button").css({"background-color": "white", "color": "black"});
  });
  $(".back_to_contacts").click(function() {
    $("#legend_content dl").hide();
    $("#welcome_content").fadeIn(1500);
    $("#contact_links").fadeIn(1500);
    $("nav button").css({"background-color": "black", "color": "white"});
  });
}); 
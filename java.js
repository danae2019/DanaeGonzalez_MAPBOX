mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuYWVnb256YWxleiIsImEiOiJjazVtbjQ1MXIwbWgyM2ZwNjV1bzZwOWdsIn0.tTsgohRa79Dc7Fwb6WrzOQ';



	



let map= new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[2.294481,48.858372],
    zoom:15
})


map.addControl(new mapboxgl.NavigationControl()); //Para navegar por el mapa
map.addControl(new mapboxgl.FullscreenControl()); //Para poner el mapa en pantalla completa
map.addControl(new mapboxgl.GeolocateControl({   //Para ver tu ubicacion por medio del GPS
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));

map.on('mousemove', function (e) {
    document.getElementById('coordenadas').innerHTML =
        JSON.stringify(e.lngLat);
});

map.on('click', function (e) {
    document.getElementById('coordenadas').innerHTML =
        JSON.stringify(e.lngLat);
        var marker=new mapboxgl.Marker().setLngLat(e.lngLat.wrap()).addTo(map)
});





	

let marker = new mapboxgl.Marker(Element)
.setLngLat({
    lng:2.294481,
    lat:48.858372
})
.addTo(map)

map.on('load', function() {
    map.addLayer({
    'id': 'room-extrusion',
    'type': 'fill-extrusion',
    'source': {
    // GeoJSON Data source used in vector tiles, documented at
    // https://gist.github.com/ryanbaumann/a7d970386ce59d11c16278b90dde094d
    'type': 'geojson',
    'data':
    'jeson.geojson'
    },
    'paint': {
    // See the Mapbox Style Specification for details on data expressions.
    // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions
     
    // Get the fill-extrusion-color from the source 'color' property.
    'fill-extrusion-color': ['get', 'color'],
     
    // Get fill-extrusion-height from the source 'height' property.
    'fill-extrusion-height': ['get', 'height'],
     
    // Get fill-extrusion-base from the source 'base_height' property.
    'fill-extrusion-base': ['get', 'base_height'],
     
    // Make extrusions slightly opaque for see through indoor walls.
    'fill-extrusion-opacity': 0.5
    }
    });
    });






	

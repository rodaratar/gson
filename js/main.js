let map = L.map('map', {
    minZoom: 0,
    maxZoom: 50,
    }).setView([-10.77, -75.23],5);

let calles=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

let rutas=L.tileLayer('http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

let black=L.tileLayer('http://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

let satelite=L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

let topografia=L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

let dark=L.tileLayer('http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);


let orto_barranca=L.esri.dynamicMapLayer({
  url: 'https://sig.otass.gob.pe/server/rest/services/IMAGENES/ORTOFOTO_EPSBARRANCA/MapServer'
});

let orto_huaral=L.esri.dynamicMapLayer({
  url: 'https://sig.otass.gob.pe/server/rest/services/IMAGENES/ORTOFOTO_EMAPAHUARAL/MapServer'
});

let orto_nasca=L.esri.dynamicMapLayer({
  url: 'https://www.idep.gob.pe/geoportal/rest/services/IMAGENES/ORTOFOTO_NASCA/MapServer'
});
let orto_ica=L.esri.dynamicMapLayer({
  url: 'https://www.idep.gob.pe/geoportal/rest/services/IMAGENES/ORTOFOTO_ICA/MapServer'
});

//USGS ULTIMO SISMO
let magnitud=L.esri.featureLayer({
    url: 'https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/USGS_Seismic_Data_v1/FeatureServer/0'
  }).addTo(map);

  let intensidad=L.esri.featureLayer({
    url: 'https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/USGS_Seismic_Data_v1/FeatureServer/1'
  }).addTo(map);

//IGP
let sismos_2021=L.esri.featureLayer({
  url: 'https://ide.igp.gob.pe/arcgis/rest/services/CENSIS/GEOVISOR/MapServer/1'
}).addTo(map);

let ultimo_sismo=L.esri.featureLayer({
  url: 'https://ide.igp.gob.pe/arcgis/rest/services/CENSIS/UltSismoGeoserver/MapServer/0'
}).addTo(map);

//INGEMMET
let peligros_geologicos=L.esri.featureLayer({
  url: 'https://geocatmin.ingemmet.gob.pe/arcgis/rest/services/SERV_PELIGROS_GEOLOGICOS/MapServer/0'
}).addTo(map);

//CENEPRED
let inundacion_inven=L.esri.featureLayer({
  url: 'http://sigrid.cenepred.gob.pe/arcgis/rest/services/Cartografia_Peligros/MapServer/5010100'
}).addTo(map);

//INDECI
let geomorfologia=L.esri.featureLayer({
  url: 'https://geocatmin.ingemmet.gob.pe/arcgis/rest/services/SERV_PELIGROS_GEOLOGICOS/MapServer/0'
}).addTo(map);


var myIcon1 = L.icon({
    iconUrl: 'imagen/ico12.gif',
    iconSize: [30, 50],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});
var myIcon2 = L.icon({
    iconUrl: 'imagen/ico14.gif',
    iconSize: [30, 50],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});
var myIcon3 = L.icon({
    iconUrl: 'imagen/ico15.gif',
    iconSize: [30, 50],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});
var myIcon4 = L.icon({
    iconUrl: 'imagen/ico17.gif',
    iconSize: [30, 50],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});
var icon1 = L.Icon.extend({
  iconUrl: 'imagen/ico1.png'
});
var icon2 = L.Icon.extend({
  iconUrl: 'imagen/ico2.png'
});


let littleton = L.marker([-11.61, -77.02],{icon: myIcon1}).bindPopup('This is Littleton, CO.').addTo(map)
    denver    = L.marker([-10.74, -78.09],{icon: myIcon2}).bindPopup('This is Denver, CO.').addTo(map)
    aurora    = L.marker([-9.73, -76.07],{icon: myIcon3}).bindPopup('This is Aurora, CO.').addTo(map)
    golden    = L.marker([-12.77, -75.04],{icon: myIcon4}).bindPopup('This is Golden, CO.').addTo(map)
let cities = L.layerGroup([littleton, denver, aurora, golden]);

let grifos_de_agua = new L.featureGroup();
let reservorios = new L.featureGroup();
let valvulas_de_agua = new L.featureGroup();
let buzon = new L.featureGroup();
let buzon_de_arranque = new L.featureGroup();
let flujo_de_alcantarillado = new L.featureGroup();
let cajas_de_alcantarillado = new L.featureGroup();
let sector_comercial = new L.featureGroup();
let rutas_de_lectura = new L.featureGroup();
let rutas_de_reparto = new L.featureGroup();
let pto_geodesico_barranca = new L.featureGroup();
let curvas_regionales = new L.featureGroup();

let baseMaps = {
    "MAPA BASE CALLES": calles,
    "MAPA BASE RUTAS": rutas,
    "MAPA BASE SATELITE": satelite,
    "MAPA BASE TOPOGRAFIA": topografia,
    "MAPA BASE BLACK": black,
    "MAPA BASE DARK": dark
};

let overlayMaps = {
    "UBICACION":{
        "Ciudad": cities
    },
    "AGUA POTABLE":{
        "Grifos de Agua": grifos_de_agua,
        "Reservorios": reservorios,
        "Valvulas de Agua": valvulas_de_agua
    },
    "ALCANTARILLADO":{
        "Buzon": buzon,
        "Buzon de Arranque": buzon_de_arranque,
        "Flujo de Alcantarillado": flujo_de_alcantarillado,
        "Cajas de Alcantarillado": cajas_de_alcantarillado
    },
    "COMERCIAL":{
        "Sector": sector_comercial,
        "Rutas de Lectura": rutas_de_lectura,
        "Rutas de Reparto": rutas_de_reparto
    },
    "TOPOGRAFIA":{
        "Puntos Geodesicos": pto_geodesico_barranca,
        "Curvas Regionales": curvas_regionales
    }
};


let maps = {
    "MAPA BASE SATELITE": satelite
};

let overlay = {
    "ORTOFOTOS":{
        "Barranca": orto_barranca,
        "Huaral": orto_huaral,
        "Nasca": orto_nasca,
        "Ica": orto_ica
    },
    "USGS-SISMOS":{
        "Magnitud": magnitud,
        "intensidad": intensidad
    },
    "IGP":{
      "Sismos 2021": sismos_2021,
      "Ultimo Sismo": ultimo_sismo
    },
    "INGEMMET":{
        "Peligros Geologicos": peligros_geologicos
    },
    "CENEPRED":{
        "Inundacion Inventario": inundacion_inven
    }
};


var options = {
  /*/ Make the "Landmarks" group exclusive (use radio inputs)
  exclusiveGroups: ["AGUA POTABLE"],/*/
  // Show a checkbox next to non-exclusive group labels for toggling all
  groupCheckboxes: true
};

  $.getJSON("data/agua_potable/GRIFOS_DE_AGUA.geojson", function(geojson) {
   var geojsonLayer = L.geoJson(geojson, {
    pointToLayer: function (feature, latLng) {
          return new L.Marker(latLng, {
            icon: new icon1({
              iconUrl: 'imagen/ico1.png',
              iconSize: [32, 37],
              iconAnchor: [16, 37],
              popupAnchor: [0, -37]
            })
          })
      },
  }).addTo(grifos_de_agua);
    geojsonLayer.addTo(grifos_de_agua);
  });

  $.getJSON("data/agua_potable/RESERVORIOS.geojson", function(data) {
  	var geojson = L.geoJson(data, {
  		onEachFeature: function (feature, layer) {
  			layer.bindPopup(feature.properties.DISTRITO);
  		},
  		polygonToLayer: function (geojson, latlng) {
      return L.circleMarker(latlng);
    },
    style:{
      fillColor: "#3364ff",
      color: '#5BFF33',
      weight: 2,
      opacity: 1.0,
      fillOpacity: 1.0
    }
  	});
  	geojson.addTo(reservorios);
  });

  $.getJSON("data/agua_potable/VALVULAS_DE_AGUA.geojson", function(geojson) {
   var geojsonLayer = L.geoJson(geojson, {
    pointToLayer: function (feature, latLng) {
          return new L.Marker(latLng, {
            icon: new icon2({
              iconUrl: 'imagen/ico2.png',
              iconSize: [32, 37],
              iconAnchor: [16, 37],
              popupAnchor: [0, -37]
            })
          })
      },
  }).addTo(valvulas_de_agua);
  	geojson.addTo(valvulas_de_agua);
  });

  $.getJSON("data/alcantarillado/BUZON.geojson", function(data) {
  	var geojson = L.geoJson(data, {
    onEachFeature: function (feature, layer) {
      var html = "";
      for (prop in feature.properties){
        html += prop+": "+feature.properties[prop]+"<br>";
      };
      layer.bindPopup(html);
    },
    pointToLayer: function (geojson, latlng) {
      return L.circleMarker(latlng);
    },
    style:{
      fillColor: "#FF8033",
      color: '#5BFF33',
      weight: 2,
      opacity: 1.0,
      fillOpacity: 1.0
    }
  	});
  	geojson.addTo(buzon);
  });

    $.getJSON("data/alcantarillado/BUZON_DE_ARRANQUE.geojson", function(data) {
    var geojson = L.geoJson(data, {
    onEachFeature: function (feature, layer) {
      var html = "";
      for (prop in feature.properties){
        html += prop+": "+feature.properties[prop]+"<br>";
      };
      layer.bindPopup(html);
    },
    polygonToLayer: function (geojson, latlng) {
      return L.circleMarker(latlng);
    },
    style:{
      fillColor: "#FF8033",
      color: '#5BFF33',
      weight: 2,
      opacity: 1.0,
      fillOpacity: 1.0
    }
    });
    geojson.addTo(buzon_de_arranque);
  });

        $.getJSON("data/alcantarillado/FLUJO_DE_ALCANTARILLADO.geojson", function(data) {
    var geojson = L.geoJson(data, {
    onEachFeature: function (feature, layer) {
      var html = "";
      for (prop in feature.properties){
        html += prop+": "+feature.properties[prop]+"<br>";
      };
      layer.bindPopup(html);
    },
    polylineToLayer: function (geojson, latlng) {
      return L.circleMarker(latlng);
    },
    style:{
      fillColor: "#FF8033",
      color: '#5BFF33',
      weight: 2,
      opacity: 1.0,
      fillOpacity: 1.0
    }
    });
    geojson.addTo(flujo_de_alcantarillado);
  });

  $.getJSON("data/alcantarillado/CAJAS_DE_ALCANTARILLADO.geojson", function(data) {
  	var geojson = L.geoJson(data, {
    onEachFeature: function (feature, layer) {
      var html = "";
      for (prop in feature.properties){
        html += prop+": "+feature.properties[prop]+"<br>";
      };
      layer.bindPopup(html);
    },
    pointToLayer: function (geojson, latlng) {
      return L.circleMarker(latlng);
    },
    style:{
      fillColor: "#C70039",
      color: '#5BFF33',
      weight: 2,
      opacity: 1.0,
      fillOpacity: 1.0
    }
  	});
  	geojson.addTo(cajas_de_alcantarillado);
  });

  $.getJSON("data/comercial/SECTOR_COMERCIAL.geojson", function(data) {
  	var geojson = L.geoJson(data, {

  		polygonToLayer: function (geojson, latlng) {
      return L.circleMarker(latlng);
    },
    style:{
      fillColor: "#FF336E",
      color: '#5BFF33',
      weight: 2,
      opacity: 1.0,
      fillOpacity: 0.5
    },
        onEachFeature: function(feature, layer) {
      var label = L.marker(layer.getBounds().getCenter(), {
        icon: L.divIcon({
        className: 'label',
        html: feature.properties.DISTRITO,
        iconSize: [100, 40]
      })
      }).addTo(sector_comercial);
    }

  	});
  	geojson.addTo(sector_comercial);
  });

  $.getJSON("data/comercial/RECORRIDO_RUTAS_DE_LECTURA.geojson", function(data) {
  	var geojson = L.geoJson(data, {
  		onEachFeature: function (feature, layer) {
  			layer.bindPopup(feature.properties.DISTRITO);
  		},
  		pointToLayer: function (geojson, latlng) {
      return L.circleMarker(latlng);
    },
    style:{
      fillColor: "#3364ff",
      color: '#5BFF33',
      weight: 2,
      opacity: 1.0,
      fillOpacity: 1.0
    }
  	});
  	geojson.addTo(rutas_de_lectura);
  });

    $.getJSON("data/comercial/RECORRIDO_RUTAS_DE_REPARTO.geojson", function(data) {
    var geojson = L.geoJson(data, {
      onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.DISTRITO);
      },
      pointToLayer: function (geojson, latlng) {
      return L.circleMarker(latlng);
    },
    style:{
      fillColor: "#FF0000",
      color: '#FF0000',
      weight: 2,
      opacity: 1.0,
      fillOpacity: 1.0
    }
    });
    geojson.addTo(rutas_de_reparto);
  });

  $.getJSON("data/topografia/PTO_GEODESICO_BARRANCA.geojson", function(data) {
  	var geojson = L.geoJson(data, {
  		
    onEachFeature: function (feature, layer) {
      var html = "";
      for (prop in feature.properties){
        html += prop+": "+feature.properties[prop]+"<br>";
      };
      layer.bindPopup(html);
    },
    pointToLayer: function (geojson, latlng) {
    	return L.circleMarker(latlng);
    },
    style:{
      fillColor: "#191F1A",
      color: '#5BFF33',
      weight: 2,
      opacity: 1.0,
      fillOpacity: 1.0
    }
  	});
  	geojson.addTo(pto_geodesico_barranca);
  });

  $.getJSON("data/topografia/CURVAS_REGIONALES.geojson", function(data) {
  	var geojson = L.geoJson(data, {
  		onEachFeature: function (feature, layer) {
  			layer.bindPopup(feature.properties.DISTRITO);
  		},
  		polylineToLayer: function (geojson, latlng) {
      return L.circleMarker(latlng);
    },
    style:{
      fillColor: "#7E8680",
      color: '#7E8680',
      weight: 2,
      opacity: 1.0,
      fillOpacity: 1.0
    }
  	});
  	geojson.addTo(curvas_regionales);
  });


L.control.groupedLayers(baseMaps,overlayMaps,options).addTo(map);
L.control.groupedLayers(maps,overlay).addTo(map);
L.control.scale({metric:true, position: 'bottomleft'}).addTo(map);


// Overview mini map
var topografy = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var miniMap = new L.Control.MiniMap(topografy, {
  toggleDisplay: true,
  minimized: false,
  position: 'bottomleft'
}).addTo(map);

// MARCA DE AGUA
L.Control.Watermark = L.Control.extend({
    onAdd: function(map) {
        var img = L.DomUtil.create('img');
        img.src = 'imagen/logo.png';
        img.style.width = '200px';
        return img;
    },

    onRemove: function(map) {
        // Nothing to do here
    }
});

L.control.watermark = function(opts) {
    return new L.Control.Watermark(opts);
}

L.control.watermark({ position: 'bottomright' }).addTo(map);
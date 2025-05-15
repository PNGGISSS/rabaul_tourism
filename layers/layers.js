var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenTopoMap_1 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LLG_3 = new ol.format.GeoJSON();
var features_LLG_3 = format_LLG_3.readFeatures(json_LLG_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LLG_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LLG_3.addFeatures(features_LLG_3);
var lyr_LLG_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LLG_3, 
                style: style_LLG_3,
                popuplayertitle: 'LLG',
                interactive: false,
                title: '<img src="styles/legend/LLG_3.png" /> LLG'
            });
var format_Boatroute_4 = new ol.format.GeoJSON();
var features_Boatroute_4 = format_Boatroute_4.readFeatures(json_Boatroute_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boatroute_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boatroute_4.addFeatures(features_Boatroute_4);
var lyr_Boatroute_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boatroute_4, 
                style: style_Boatroute_4,
                popuplayertitle: 'Boat route',
                interactive: false,
                title: '<img src="styles/legend/Boatroute_4.png" /> Boat route'
            });
var format_Airport_5 = new ol.format.GeoJSON();
var features_Airport_5 = format_Airport_5.readFeatures(json_Airport_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Airport_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Airport_5.addFeatures(features_Airport_5);
cluster_Airport_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Airport_5
});
var lyr_Airport_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Airport_5, 
                style: style_Airport_5,
                popuplayertitle: 'Airport',
                interactive: false,
                title: '<img src="styles/legend/Airport_5.png" /> Airport'
            });
var format_Habour_6 = new ol.format.GeoJSON();
var features_Habour_6 = format_Habour_6.readFeatures(json_Habour_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Habour_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Habour_6.addFeatures(features_Habour_6);
cluster_Habour_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Habour_6
});
var lyr_Habour_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Habour_6, 
                style: style_Habour_6,
                popuplayertitle: 'Habour',
                interactive: false,
                title: '<img src="styles/legend/Habour_6.png" /> Habour'
            });
var format_RundownSites_7 = new ol.format.GeoJSON();
var features_RundownSites_7 = format_RundownSites_7.readFeatures(json_RundownSites_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RundownSites_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RundownSites_7.addFeatures(features_RundownSites_7);
cluster_RundownSites_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_RundownSites_7
});
var lyr_RundownSites_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_RundownSites_7, 
                style: style_RundownSites_7,
                popuplayertitle: 'Rundown Sites',
                interactive: true,
                title: '<img src="styles/legend/RundownSites_7.png" /> Rundown Sites'
            });
var format_PotentialSites_8 = new ol.format.GeoJSON();
var features_PotentialSites_8 = format_PotentialSites_8.readFeatures(json_PotentialSites_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotentialSites_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotentialSites_8.addFeatures(features_PotentialSites_8);
cluster_PotentialSites_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PotentialSites_8
});
var lyr_PotentialSites_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PotentialSites_8, 
                style: style_PotentialSites_8,
                popuplayertitle: 'Potential Sites',
                interactive: true,
                title: '<img src="styles/legend/PotentialSites_8.png" /> Potential Sites'
            });
var format_ExistingSites_9 = new ol.format.GeoJSON();
var features_ExistingSites_9 = format_ExistingSites_9.readFeatures(json_ExistingSites_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingSites_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingSites_9.addFeatures(features_ExistingSites_9);
cluster_ExistingSites_9 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ExistingSites_9
});
var lyr_ExistingSites_9 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ExistingSites_9, 
                style: style_ExistingSites_9,
                popuplayertitle: 'Existing Sites',
                interactive: true,
                title: '<img src="styles/legend/ExistingSites_9.png" /> Existing Sites'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenTopoMap_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_LLG_3.setVisible(true);lyr_Boatroute_4.setVisible(true);lyr_Airport_5.setVisible(true);lyr_Habour_6.setVisible(true);lyr_RundownSites_7.setVisible(true);lyr_PotentialSites_8.setVisible(true);lyr_ExistingSites_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenTopoMap_1,lyr_OSMStandard_2,lyr_LLG_3,lyr_Boatroute_4,lyr_Airport_5,lyr_Habour_6,lyr_RundownSites_7,lyr_PotentialSites_8,lyr_ExistingSites_9];
lyr_LLG_3.set('fieldAliases', {'NAME': 'NAME', 'UNIQUE_ID': 'UNIQUE_ID', 'AREA_SQKM': 'AREA_SQKM', 'TOTAL_POP': 'TOTAL_POP', 'TOT_MALE': 'TOT_MALE', 'TOT_FEMALE': 'TOT_FEMALE', 'DENSITY': 'DENSITY', });
lyr_Boatroute_4.set('fieldAliases', {'LENGTH_KM': 'LENGTH_KM', });
lyr_Airport_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Habour_6.set('fieldAliases', {'Name': 'Name', });
lyr_RundownSites_7.set('fieldAliases', {'id': 'id', 'Site': 'Site', 'Products': 'Products', 'Rd. Cond.': 'Rd. Cond.', 'Safety': 'Safety', 'Dates': 'Dates', });
lyr_PotentialSites_8.set('fieldAliases', {'Site': 'Site', 'Products': 'Products', 'Dates': 'Dates', 'Rd Cond.': 'Rd Cond.', 'Safety': 'Safety', });
lyr_ExistingSites_9.set('fieldAliases', {'Site': 'Site', 'Products': 'Products', 'Dates': 'Dates', 'Rd Cond.': 'Rd Cond.', 'Safety': 'Safety', });
lyr_LLG_3.set('fieldImages', {'NAME': 'TextEdit', 'UNIQUE_ID': 'TextEdit', 'AREA_SQKM': 'TextEdit', 'TOTAL_POP': 'Range', 'TOT_MALE': 'Range', 'TOT_FEMALE': 'Range', 'DENSITY': 'TextEdit', });
lyr_Boatroute_4.set('fieldImages', {'LENGTH_KM': 'TextEdit', });
lyr_Airport_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Habour_6.set('fieldImages', {'Name': 'TextEdit', });
lyr_RundownSites_7.set('fieldImages', {'id': 'TextEdit', 'Site': 'TextEdit', 'Products': 'TextEdit', 'Rd. Cond.': 'TextEdit', 'Safety': 'TextEdit', 'Dates': 'TextEdit', });
lyr_PotentialSites_8.set('fieldImages', {'Site': 'TextEdit', 'Products': 'TextEdit', 'Dates': 'TextEdit', 'Rd Cond.': 'TextEdit', 'Safety': 'TextEdit', });
lyr_ExistingSites_9.set('fieldImages', {'Site': 'TextEdit', 'Products': 'TextEdit', 'Dates': 'TextEdit', 'Rd Cond.': 'TextEdit', 'Safety': 'TextEdit', });
lyr_LLG_3.set('fieldLabels', {'NAME': 'inline label - always visible', 'UNIQUE_ID': 'inline label - always visible', 'AREA_SQKM': 'inline label - always visible', 'TOTAL_POP': 'inline label - always visible', 'TOT_MALE': 'inline label - always visible', 'TOT_FEMALE': 'inline label - always visible', 'DENSITY': 'inline label - always visible', });
lyr_Boatroute_4.set('fieldLabels', {'LENGTH_KM': 'no label', });
lyr_Airport_5.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - visible with data', });
lyr_Habour_6.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_RundownSites_7.set('fieldLabels', {'id': 'no label', 'Site': 'inline label - visible with data', 'Products': 'inline label - visible with data', 'Rd. Cond.': 'inline label - visible with data', 'Safety': 'no label', 'Dates': 'inline label - visible with data', });
lyr_PotentialSites_8.set('fieldLabels', {'Site': 'inline label - visible with data', 'Products': 'inline label - visible with data', 'Dates': 'inline label - visible with data', 'Rd Cond.': 'inline label - visible with data', 'Safety': 'inline label - visible with data', });
lyr_ExistingSites_9.set('fieldLabels', {'Site': 'inline label - visible with data', 'Products': 'inline label - visible with data', 'Dates': 'inline label - visible with data', 'Rd Cond.': 'inline label - visible with data', 'Safety': 'inline label - visible with data', });
lyr_ExistingSites_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
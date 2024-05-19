var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_R3_1 = new ol.format.GeoJSON();
var features_R3_1 = format_R3_1.readFeatures(json_R3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R3_1.addFeatures(features_R3_1);
var lyr_R3_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R3_1, 
                style: style_R3_1,
                popuplayertitle: "R3",
                interactive: true,
    title: 'R3<br />\
    <img src="styles/legend/R3_1_0.png" /> 240 - 1715<br />\
    <img src="styles/legend/R3_1_1.png" /> 1715 - 1828<br />\
    <img src="styles/legend/R3_1_2.png" /> 1828 - 1942<br />\
    <img src="styles/legend/R3_1_3.png" /> 1942 - 2055<br />\
    <img src="styles/legend/R3_1_4.png" /> 2055 - 2169<br />\
    <img src="styles/legend/R3_1_5.png" /> 2169 - 2282<br />'
        });
var format_Algrie_2 = new ol.format.GeoJSON();
var features_Algrie_2 = format_Algrie_2.readFeatures(json_Algrie_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Algrie_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Algrie_2.addFeatures(features_Algrie_2);
var lyr_Algrie_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Algrie_2, 
                style: style_Algrie_2,
                popuplayertitle: "Algérie",
                interactive: true,
                    title: '<img src="styles/legend/Algrie_2.png" /> Algérie'
                });

lyr_GoogleMaps_0.setVisible(true);lyr_R3_1.setVisible(true);lyr_Algrie_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_R3_1,lyr_Algrie_2];
lyr_R3_1.set('fieldAliases', {'fid': 'fid', 'index': 'index', 'E_min': 'E_min', 'E_max': 'E_max', 'label': 'label', });
lyr_Algrie_2.set('fieldAliases', {'name': 'name', 'name_ar': 'name_ar', 'name_ber': 'name_ber', 'density': 'density', 'city_code': 'city_code', });
lyr_R3_1.set('fieldImages', {'fid': 'TextEdit', 'index': 'TextEdit', 'E_min': 'TextEdit', 'E_max': 'TextEdit', 'label': 'TextEdit', });
lyr_Algrie_2.set('fieldImages', {'name': 'TextEdit', 'name_ar': 'TextEdit', 'name_ber': 'TextEdit', 'density': 'KeyValue', 'city_code': 'KeyValue', });
lyr_R3_1.set('fieldLabels', {'fid': 'no label', 'index': 'no label', 'E_min': 'no label', 'E_max': 'no label', 'label': 'no label', });
lyr_Algrie_2.set('fieldLabels', {'name': 'inline label - always visible', 'name_ar': 'no label', 'name_ber': 'no label', 'density': 'no label', 'city_code': 'no label', });
lyr_Algrie_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
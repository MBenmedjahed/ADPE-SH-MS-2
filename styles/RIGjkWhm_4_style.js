var size = 0;
var placement = 'point';

var style_RIGjkWhm_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Ej_min");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.658100 && value <= 2.108367) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2.108367 && value <= 2.937083) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(239,245,232,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2.937083 && value <= 3.765800) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(150,211,134,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 3.765800 && value <= 4.594517) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(92,184,106,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 4.594517 && value <= 5.423233) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(39,151,78,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 5.423233 && value <= 6.251950) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(6,114,62,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};

var size = 0;
var placement = 'point';

var style_Whisper200EAkWhm_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("E_min");
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
    if (value >= 0.000000 && value <= 168.053500) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,97,1,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 168.053500 && value <= 336.107000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,184,99,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 336.107000 && value <= 504.160500) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(247,247,247,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 504.160500 && value <= 672.214000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(178,171,210,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 672.214000 && value <= 840.267500) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(94,60,153,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};

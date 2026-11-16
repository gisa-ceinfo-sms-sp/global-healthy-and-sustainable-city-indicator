var size = 0;
var placement = 'point';

var style_Caminhabilidadeparmetrolocal_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("local_walkability");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= -8.853180 && value <= -5.857033) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,25,28,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= -5.857033 && value <= -2.860887) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,174,97,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= -2.860887 && value <= 0.135260) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,191,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 0.135260 && value <= 3.131407) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(171,221,164,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 3.131407 && value <= 6.127554) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(43,131,186,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    };

    return style;
};

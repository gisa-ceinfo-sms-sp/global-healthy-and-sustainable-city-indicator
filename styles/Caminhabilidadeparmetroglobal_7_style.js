var size = 0;
var placement = 'point';

var style_Caminhabilidadeparmetroglobal_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("all_cities_walkability");
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
    if (value >= -4.552261 && value <= -2.923267) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(202,0,32,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= -2.923267 && value <= -1.294274) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,110,97,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= -1.294274 && value <= 0.334720) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(245,192,169,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 0.334720 && value <= 1.963713) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(247,247,247,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 1.963713 && value <= 3.592706) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(180,214,230,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 3.592706 && value <= 5.221700) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(99,169,207,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 5.221700 && value <= 6.850693) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(5,113,176,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    };

    return style;
};

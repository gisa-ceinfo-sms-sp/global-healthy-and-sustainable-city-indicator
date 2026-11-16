var size = 0;
var placement = 'point';

var style_DailyLivingZglobal_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("all_cities_z_daily_living");
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
    if (value >= -1.122630 && value <= -0.758461) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,25,28,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= -0.758461 && value <= -0.394291) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,100,63,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= -0.394291 && value <= -0.030122) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,174,97,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= -0.030122 && value <= 0.334047) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,215,144,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 0.334047 && value <= 0.698217) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,191,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 0.698217 && value <= 1.062386) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(213,238,178,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 1.062386 && value <= 1.426555) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(171,221,164,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 1.426555 && value <= 1.790725) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(107,176,175,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 1.790725 && value <= 2.154894) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(43,131,186,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    };

    return style;
};

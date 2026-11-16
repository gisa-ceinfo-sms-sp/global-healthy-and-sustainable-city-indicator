var size = 0;
var placement = 'point';

var style_Populaosemacessoalimentosfrescosem500metros_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("pop_est");
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
    if (value >= 5.033316 && value <= 768.662132) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(250,185,128,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 768.662132 && value <= 1532.290947) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,97,28,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 1532.290947 && value <= 2295.919763) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(232,45,45,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 2295.919763 && value <= 3059.548578) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(144,16,26,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 3059.548578 && value <= 3823.177394) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(115,44,114,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 3823.177394 && value <= 4586.806209) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(3,5,26,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    };

    return style;
};

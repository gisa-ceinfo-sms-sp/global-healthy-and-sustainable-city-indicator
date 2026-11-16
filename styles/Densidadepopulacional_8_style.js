var size = 0;
var placement = 'point';

var style_Densidadepopulacional_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("pop_per_sqkm");
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
    if (value >= 124.132287 && value <= 10262.675997) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,245,240,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 10262.675997 && value <= 20401.219708) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,233,222,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 20401.219708 && value <= 30539.763418) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,217,201,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 30539.763418 && value <= 40678.307128) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,195,172,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 40678.307128 && value <= 50816.850838) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,172,144,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 50816.850838 && value <= 60955.394549) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,148,116,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 60955.394549 && value <= 71093.938259) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(251,124,92,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 71093.938259 && value <= 81232.481969) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(249,99,70,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 81232.481969 && value <= 91371.025679) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(242,72,52,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 91371.025679 && value <= 101509.569389) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(227,48,39,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 101509.569389 && value <= 111648.113100) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(206,27,30,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 111648.113100 && value <= 121786.656810) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(182,19,25,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 121786.656810 && value <= 131925.200520) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(151,12,19,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 131925.200520 && value <= 142063.744230) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(103,0,13,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    };

    return style;
};

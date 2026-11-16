var size = 0;
var placement = 'point';

var style_SupervisoTcnicadeSade_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "6.5px \'Calibri\', sans-serif";
    var labelFill = "#676767";
    var bufferColor = "#ffffff";
    var bufferWidth = 1.7999999999999998;
    var textAlign = 'center';
    var offsetX = 0;
    var offsetY = 0;
    var overflow = true;
    var repeat = 0;
    var placement = 'point';
    if ("" !== null && resolution > 0 && resolution < 0) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.38}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};

var size = 0;
var placement = 'point';

var style_CoordenadoriaRegionaldeSade_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "11.700000000000001px \'Calibri\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 1.7999999999999998;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = true;
    var repeat = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}),fill: new ol.style.Fill({color: 'rgba(255,158,23,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};

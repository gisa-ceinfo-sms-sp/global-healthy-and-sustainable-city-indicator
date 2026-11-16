var size = 0;
var placement = 'point';

var style_Escoredeacessoalimentosfrescosem500metros_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("pct_access_500m_fresh_food_market_score");
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
    if (value >= 0.000000 && value <= 0.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(229,54,63,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 1.000000 && value <= 6.667000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(240,249,232,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 6.667000 && value <= 20.689655) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(209,237,207,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 20.689655 && value <= 36.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(177,225,189,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 36.000000 && value <= 52.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(141,211,194,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 52.000000 && value <= 66.666667) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(107,192,198,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 66.666667 && value <= 81.250000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(75,168,201,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 81.250000 && value <= 93.750000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(42,137,189,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 93.750000 && value <= 100.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(8,104,172,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    };

    return style;
};

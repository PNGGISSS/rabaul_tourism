var size = 0;
var placement = 'point';

var style_LLG_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "7.800000000000001px \'Arial\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("NAME") !== null) {
        labelText = String(feature.get("NAME"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: [7.6,1.52,3.04,1.52], lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(253,191,111,0.023529411764705882)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};

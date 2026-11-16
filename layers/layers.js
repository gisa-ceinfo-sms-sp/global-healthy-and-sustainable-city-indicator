var wms_layers = [];

// 1. Mapas-Base (Carto Light, Carto Voyager e Google Satélite)
var lyr_MapabasecartogrficoCartoLight_0 = new ol.layer.Tile({
    'title': 'Mapa-base cartográfico (Carto Light)',
    'type': 'base',
    'opacity': 1.000000,
    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png?key=cb1_3mdd_1_8d519099448989b379eed688'
    })
});

var lyr_MapabaseCartoVoyager_01 = new ol.layer.Tile({
    'title': 'Carto Voyager',
    'type': 'base',
    'opacity': 1.000000,
    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=cb1_3mdd_1_8d519099448989b379eed688'
    })
});

var lyr_MapabaseGoogleSatelite_02 = new ol.layer.Tile({
    'title': 'Google Satélite',
    'type': 'base',
    'opacity': 1.000000,
    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
    })
});

// 2. Fonte Vetorial Unificada para a Malha Hexagonal
var rawHexGeoJSON = (typeof json_Caminhabilidadeparmetroglobal_7 !== 'undefined') ? json_Caminhabilidadeparmetroglobal_7 : json_DailyLivinglocal_2;
var format_Hex = new ol.format.GeoJSON();
var features_Hex = format_Hex.readFeatures(rawHexGeoJSON, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
var sharedHexSource = new ol.source.Vector({
    attributions: ' '
});
sharedHexSource.addFeatures(features_Hex);

function getHexSource(specificJsonVar) {
    if (typeof specificJsonVar !== 'undefined' && specificJsonVar !== rawHexGeoJSON) {
        var fmt = new ol.format.GeoJSON();
        var feats = fmt.readFeatures(specificJsonVar, {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
        var src = new ol.source.Vector({attributions: ' '});
        src.addFeatures(feats);
        return src;
    }
    return sharedHexSource;
}

// 3. Camadas Temáticas Hexagonais
var lyr_DailyLivingZglobal_1 = new ol.layer.Vector({
    declutter: false,
    source: getHexSource(typeof json_DailyLivingZglobal_1 !== 'undefined' ? json_DailyLivingZglobal_1 : undefined),
    style: style_DailyLivingZglobal_1,
    popuplayertitle: 'Daily Living (Z-global)',
    interactive: true,
    title: 'Daily Living (Z-global)<div class="layer-legend-items">\
    <img src="styles/legend/DailyLivingZglobal_1_0.png" /> -1,12 - -0,76<br />\
    <img src="styles/legend/DailyLivingZglobal_1_1.png" /> -0,76 - -0,39<br />\
    <img src="styles/legend/DailyLivingZglobal_1_2.png" /> -0,39 - -0,03<br />\
    <img src="styles/legend/DailyLivingZglobal_1_3.png" /> -0,03 - 0,33<br />\
    <img src="styles/legend/DailyLivingZglobal_1_4.png" /> 0,33 - 0,7<br />\
    <img src="styles/legend/DailyLivingZglobal_1_5.png" /> 0,7 - 1,06<br />\
    <img src="styles/legend/DailyLivingZglobal_1_6.png" /> 1,06 - 1,43<br />\
    <img src="styles/legend/DailyLivingZglobal_1_7.png" /> 1,43 - 1,79<br />\
    <img src="styles/legend/DailyLivingZglobal_1_8.png" /> 1,79 - 2,15</div>'
});

var lyr_DailyLivinglocal_2 = new ol.layer.Vector({
    declutter: false,
    source: getHexSource(typeof json_DailyLivinglocal_2 !== 'undefined' ? json_DailyLivinglocal_2 : undefined),
    style: style_DailyLivinglocal_2,
    popuplayertitle: 'Daily Living (local)',
    interactive: true,
    title: 'Daily Living (local)<div class="layer-legend-items">\
    <img src="styles/legend/DailyLivinglocal_2_0.png" /> 0 - 0,5<br />\
    <img src="styles/legend/DailyLivinglocal_2_1.png" /> 0,5 - 1<br />\
    <img src="styles/legend/DailyLivinglocal_2_2.png" /> 1 - 1,5<br />\
    <img src="styles/legend/DailyLivinglocal_2_3.png" /> 1,5 - 2<br />\
    <img src="styles/legend/DailyLivinglocal_2_4.png" /> 2 - 2,5<br />\
    <img src="styles/legend/DailyLivinglocal_2_5.png" /> 2,5 - 3</div>'
});

var lyr_Escoredeacessoalimentosfrescosem500metros_5 = new ol.layer.Vector({
    declutter: false,
    source: getHexSource(typeof json_Escoredeacessoalimentosfrescosem500metros_5 !== 'undefined' ? json_Escoredeacessoalimentosfrescosem500metros_5 : undefined),
    style: style_Escoredeacessoalimentosfrescosem500metros_5,
    popuplayertitle: 'Escore de acesso à alimentos frescos em 500 metros',
    interactive: true,
    title: 'Escore de acesso à alimentos frescos em 500 metros<div class="layer-legend-items">\
    <img src="styles/legend/Escoredeacessoalimentosfrescosem500metros_5_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/Escoredeacessoalimentosfrescosem500metros_5_1.png" /> 1 - 6,7<br />\
    <img src="styles/legend/Escoredeacessoalimentosfrescosem500metros_5_2.png" /> 6,7 - 20,7<br />\
    <img src="styles/legend/Escoredeacessoalimentosfrescosem500metros_5_3.png" /> 20,7 - 36<br />\
    <img src="styles/legend/Escoredeacessoalimentosfrescosem500metros_5_4.png" /> 36 - 52<br />\
    <img src="styles/legend/Escoredeacessoalimentosfrescosem500metros_5_5.png" /> 52 - 66,7<br />\
    <img src="styles/legend/Escoredeacessoalimentosfrescosem500metros_5_6.png" /> 66,7 - 81,3<br />\
    <img src="styles/legend/Escoredeacessoalimentosfrescosem500metros_5_7.png" /> 81,3 - 93,8<br />\
    <img src="styles/legend/Escoredeacessoalimentosfrescosem500metros_5_8.png" /> 93,8 - 100</div>'
});

var lyr_Caminhabilidadeparmetrolocal_6 = new ol.layer.Vector({
    declutter: false,
    source: getHexSource(typeof json_Caminhabilidadeparmetrolocal_6 !== 'undefined' ? json_Caminhabilidadeparmetrolocal_6 : undefined),
    style: style_Caminhabilidadeparmetrolocal_6,
    popuplayertitle: 'Caminhabilidade (parâmetro local)',
    interactive: true,
    title: 'Caminhabilidade (parâmetro local)<div class="layer-legend-items">\
    <img src="styles/legend/Caminhabilidadeparmetrolocal_6_0.png" /> -8,9 - -5,9<br />\
    <img src="styles/legend/Caminhabilidadeparmetrolocal_6_1.png" /> -5,9 - -2,9<br />\
    <img src="styles/legend/Caminhabilidadeparmetrolocal_6_2.png" /> -2,9 - 0,1<br />\
    <img src="styles/legend/Caminhabilidadeparmetrolocal_6_3.png" /> 0,1 - 3,1<br />\
    <img src="styles/legend/Caminhabilidadeparmetrolocal_6_4.png" /> 3,1 - 6,1</div>'
});

var lyr_Caminhabilidadeparmetroglobal_7 = new ol.layer.Vector({
    declutter: false,
    source: sharedHexSource,
    style: style_Caminhabilidadeparmetroglobal_7,
    popuplayertitle: 'Caminhabilidade (parâmetro global)',
    interactive: true,
    title: 'Caminhabilidade (parâmetro global)<div class="layer-legend-items">\
    <img src="styles/legend/Caminhabilidadeparmetroglobal_7_0.png" /> -4,6 - -2,9<br />\
    <img src="styles/legend/Caminhabilidadeparmetroglobal_7_1.png" /> -2,9 - -1,3<br />\
    <img src="styles/legend/Caminhabilidadeparmetroglobal_7_2.png" /> -1,3 - 0,3<br />\
    <img src="styles/legend/Caminhabilidadeparmetroglobal_7_3.png" /> 0,3 - 2<br />\
    <img src="styles/legend/Caminhabilidadeparmetroglobal_7_4.png" /> 2 - 3,6<br />\
    <img src="styles/legend/Caminhabilidadeparmetroglobal_7_5.png" /> 3,6 - 5,2<br />\
    <img src="styles/legend/Caminhabilidadeparmetroglobal_7_6.png" /> 5,2 - 6,9</div>'
});

var lyr_Densidadepopulacional_8 = new ol.layer.Vector({
    declutter: false,
    source: getHexSource(typeof json_Densidadepopulacional_8 !== 'undefined' ? json_Densidadepopulacional_8 : undefined),
    style: style_Densidadepopulacional_8,
    popuplayertitle: 'Densidade populacional',
    interactive: true,
    title: 'Densidade populacional<div class="layer-legend-items">\
    <img src="styles/legend/Densidadepopulacional_8_0.png" /> 124 - 10263<br />\
    <img src="styles/legend/Densidadepopulacional_8_1.png" /> 10263 - 20401<br />\
    <img src="styles/legend/Densidadepopulacional_8_2.png" /> 20401 - 30540<br />\
    <img src="styles/legend/Densidadepopulacional_8_3.png" /> 30540 - 40678<br />\
    <img src="styles/legend/Densidadepopulacional_8_4.png" /> 40678 - 50817<br />\
    <img src="styles/legend/Densidadepopulacional_8_5.png" /> 50817 - 60955<br />\
    <img src="styles/legend/Densidadepopulacional_8_6.png" /> 60955 - 71094<br />\
    <img src="styles/legend/Densidadepopulacional_8_7.png" /> 71094 - 81232<br />\
    <img src="styles/legend/Densidadepopulacional_8_8.png" /> 81232 - 91371<br />\
    <img src="styles/legend/Densidadepopulacional_8_9.png" /> 91371 - 101510<br />\
    <img src="styles/legend/Densidadepopulacional_8_10.png" /> 101510 - 111648<br />\
    <img src="styles/legend/Densidadepopulacional_8_11.png" /> 111648 - 121787<br />\
    <img src="styles/legend/Densidadepopulacional_8_12.png" /> 121787 - 131925<br />\
    <img src="styles/legend/Densidadepopulacional_8_13.png" /> 131925 - 142064</div>'
});

// 4. Camadas de Limites Administrativos da Saúde
var format_CoordenadoriaRegionaldeSade_9 = new ol.format.GeoJSON();
var features_CoordenadoriaRegionaldeSade_9 = format_CoordenadoriaRegionaldeSade_9.readFeatures(json_CoordenadoriaRegionaldeSade_9, {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordenadoriaRegionaldeSade_9 = new ol.source.Vector({ attributions: ' ' });
jsonSource_CoordenadoriaRegionaldeSade_9.addFeatures(features_CoordenadoriaRegionaldeSade_9);
var lyr_CoordenadoriaRegionaldeSade_9 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_CoordenadoriaRegionaldeSade_9,
    style: style_CoordenadoriaRegionaldeSade_9,
    popuplayertitle: 'Coordenadoria Regional de Saúde',
    interactive: true,
    title: '<img src="styles/legend/CoordenadoriaRegionaldeSade_9.png" /> Coordenadoria Regional de Saúde'
});

var format_SupervisoTcnicadeSade_10 = new ol.format.GeoJSON();
var features_SupervisoTcnicadeSade_10 = format_SupervisoTcnicadeSade_10.readFeatures(json_SupervisoTcnicadeSade_10, {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupervisoTcnicadeSade_10 = new ol.source.Vector({ attributions: ' ' });
jsonSource_SupervisoTcnicadeSade_10.addFeatures(features_SupervisoTcnicadeSade_10);
var lyr_SupervisoTcnicadeSade_10 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SupervisoTcnicadeSade_10,
    style: style_SupervisoTcnicadeSade_10,
    popuplayertitle: 'Supervisão Técnica de Saúde',
    interactive: true,
    title: '<img src="styles/legend/SupervisoTcnicadeSade_10.png" /> Supervisão Técnica de Saúde'
});

var format_readeabrangnciadeUBS_11 = new ol.format.GeoJSON();
var features_readeabrangnciadeUBS_11 = format_readeabrangnciadeUBS_11.readFeatures(json_readeabrangnciadeUBS_11, {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeabrangnciadeUBS_11 = new ol.source.Vector({ attributions: ' ' });
jsonSource_readeabrangnciadeUBS_11.addFeatures(features_readeabrangnciadeUBS_11);
var lyr_readeabrangnciadeUBS_11 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_readeabrangnciadeUBS_11,
    style: style_readeabrangnciadeUBS_11,
    popuplayertitle: 'Área de abrangência de UBS',
    interactive: true,
    title: '<img src="styles/legend/readeabrangnciadeUBS_11.png" /> Área de abrangência de UBS'
});

// 5. Visibilidade Inicial
lyr_MapabasecartogrficoCartoLight_0.setVisible(true);
lyr_MapabaseCartoVoyager_01.setVisible(false);
lyr_MapabaseGoogleSatelite_02.setVisible(false);

lyr_DailyLivingZglobal_1.setVisible(false);
lyr_DailyLivinglocal_2.setVisible(false);
lyr_Escoredeacessoalimentosfrescosem500metros_5.setVisible(false);
lyr_Caminhabilidadeparmetrolocal_6.setVisible(false);
lyr_Caminhabilidadeparmetroglobal_7.setVisible(true);
lyr_Densidadepopulacional_8.setVisible(false);
lyr_CoordenadoriaRegionaldeSade_9.setVisible(true);
lyr_SupervisoTcnicadeSade_10.setVisible(true);
lyr_readeabrangnciadeUBS_11.setVisible(true);

var layersList = [
    lyr_MapabasecartogrficoCartoLight_0,
    lyr_MapabaseCartoVoyager_01,
    lyr_MapabaseGoogleSatelite_02,
    lyr_DailyLivingZglobal_1,
    lyr_DailyLivinglocal_2,
    lyr_Escoredeacessoalimentosfrescosem500metros_5,
    lyr_Caminhabilidadeparmetrolocal_6,
    lyr_Caminhabilidadeparmetroglobal_7,
    lyr_Densidadepopulacional_8,
    lyr_CoordenadoriaRegionaldeSade_9,
    lyr_SupervisoTcnicadeSade_10,
    lyr_readeabrangnciadeUBS_11
];

// 6. Configuração de Popups
var hexAliases = {
    'fid': 'FID',
    'index': 'ID Hexágono',
    'study_region': 'Região',
    'area_sqkm': 'Área (km²)',
    'pop_est': 'População Estimada (hab.)',
    'pop_per_sqkm': 'Densidade Populacional (hab./km²)',
    'intersection_count': 'Nº de Interseções Viárias',
    'intersections_per_sqkm': 'Densidade de Interseções (/km²)',
    'urban_sample_point_count': 'Pontos Amostrais Urbanos',
    'pct_access_500m_fresh_food_market_score': 'Acesso a Alimentos Frescos 500m (Escore %)',
    'pct_access_500m_convenience_score': 'Acesso a Conveniências 500m (Escore %)',
    'pct_access_500m_pt_osm_any_score': 'Acesso a Transporte Público OSM 500m (%)',
    'pct_access_500m_public_open_space_any_score': 'Acesso a Espaço Público Aberto 500m (%)',
    'pct_access_500m_public_open_space_large_score': 'Acesso a Grande Espaço Público 500m (%)',
    'pct_access_500m_pt_gtfs_any_score': 'Acesso a Transporte Público GTFS 500m (%)',
    'pct_access_500m_pt_gtfs_freq_30_score': 'Transporte GTFS Freq. ≤30 min (%)',
    'pct_access_500m_pt_gtfs_freq_20_score': 'Transporte GTFS Freq. ≤20 min (%)',
    'pct_access_500m_pt_any_score': 'Acesso Geral a Transporte Público 500m (%)',
    'local_nh_population_density': 'Z-Score Local: Densidade Populacional',
    'local_nh_intersection_density': 'Z-Score Local: Densidade de Interseções',
    'local_daily_living': 'Escore Daily Living (Parâmetro Local)',
    'local_walkability': 'Índice de Caminhabilidade (Local)',
    'all_cities_z_nh_population_density': 'Z-Score Global: Densidade Populacional',
    'all_cities_z_nh_intersection_density': 'Z-Score Global: Densidade de Interseções',
    'all_cities_z_daily_living': 'Escore Daily Living (Z-Global)',
    'all_cities_walkability': 'Índice de Caminhabilidade (Global)'
};

var hexLayers = [
    lyr_DailyLivingZglobal_1,
    lyr_DailyLivinglocal_2,
    lyr_Escoredeacessoalimentosfrescosem500metros_5,
    lyr_Caminhabilidadeparmetrolocal_6,
    lyr_Caminhabilidadeparmetroglobal_7,
    lyr_Densidadepopulacional_8
];

var visibleHexFields = [
    'index',
    'pop_est',
    'pop_per_sqkm',
    'pct_access_500m_fresh_food_market_score',
    'pct_access_500m_pt_any_score',
    'pct_access_500m_public_open_space_any_score',
    'local_daily_living',
    'all_cities_z_daily_living',
    'local_walkability',
    'all_cities_walkability'
];

var hexLabelsConfig = {};
var hexImagesConfig = {};
Object.keys(hexAliases).forEach(function(key) {
    if (visibleHexFields.indexOf(key) !== -1) {
        hexLabelsConfig[key] = 'inline label - visible with data';
        hexImagesConfig[key] = 'TextEdit';
    } else {
        hexLabelsConfig[key] = 'hidden';
        hexImagesConfig[key] = 'Hidden';
    }
});

hexLayers.forEach(function(layer) {
    layer.set('fieldAliases', hexAliases);
    layer.set('fieldImages', hexImagesConfig);
    layer.set('fieldLabels', hexLabelsConfig);
});

lyr_CoordenadoriaRegionaldeSade_9.set('fieldAliases', {
    'cd_identificador_coordenadoria_regional_saude': 'Código CRS',
    'nm_coordenadoria_regional_saude': 'Coordenadoria Regional (CRS)',
    'qt_area': 'Área (km²)',
    'dt_carga': 'Data de Carga'
});
lyr_CoordenadoriaRegionaldeSade_9.set('fieldImages', {
    'cd_identificador_coordenadoria_regional_saude': 'Hidden',
    'nm_coordenadoria_regional_saude': 'TextEdit',
    'qt_area': 'TextEdit',
    'dt_carga': 'Hidden'
});
lyr_CoordenadoriaRegionaldeSade_9.set('fieldLabels', {
    'cd_identificador_coordenadoria_regional_saude': 'hidden',
    'nm_coordenadoria_regional_saude': 'inline label - visible with data',
    'qt_area': 'inline label - visible with data',
    'dt_carga': 'hidden'
});

lyr_SupervisoTcnicadeSade_10.set('fieldAliases', {
    'cd_identificador_supervisao_tecnica_saude': 'Código STS',
    'nm_supervisao_tecnica_saude': 'Supervisão Técnica (STS)',
    'nm_identificacao_supervisao': 'Identificação STS',
    'nm_coordenadoria_regional_saude': 'Coordenadoria Regional (CRS)',
    'qt_area': 'Área (km²)',
    'dt_carga': 'Data de Carga'
});
lyr_SupervisoTcnicadeSade_10.set('fieldImages', {
    'cd_identificador_supervisao_tecnica_saude': 'Hidden',
    'nm_supervisao_tecnica_saude': 'TextEdit',
    'nm_identificacao_supervisao': 'Hidden',
    'nm_coordenadoria_regional_saude': 'TextEdit',
    'qt_area': 'TextEdit',
    'dt_carga': 'Hidden'
});
lyr_SupervisoTcnicadeSade_10.set('fieldLabels', {
    'cd_identificador_supervisao_tecnica_saude': 'hidden',
    'nm_supervisao_tecnica_saude': 'inline label - visible with data',
    'nm_identificacao_supervisao': 'hidden',
    'nm_coordenadoria_regional_saude': 'inline label - visible with data',
    'qt_area': 'inline label - visible with data',
    'dt_carga': 'hidden'
});

lyr_readeabrangnciadeUBS_11.set('fieldAliases', {
    'AREAKM2': 'Área de Abrangência (km²)',
    'CRS_STS_UB': 'Identificador Completo',
    'CNES_UBS': 'CNES',
    'CNESUBS': 'CNES_dup',
    'NOME_UBS': 'Unidade Básica de Saúde (UBS)',
    'STS_UBS': 'Supervisão Técnica (STS)',
    'CRS_UBS': 'Coordenadoria Regional (CRS)',
    'CNES': 'CNES_2',
    'NOMEUBS': 'NOMEUBS_dup'
});
lyr_readeabrangnciadeUBS_11.set('fieldImages', {
    'AREAKM2': 'TextEdit',
    'CRS_STS_UB': 'Hidden',
    'CNES_UBS': 'TextEdit',
    'CNESUBS': 'Hidden',
    'NOME_UBS': 'TextEdit',
    'STS_UBS': 'TextEdit',
    'CRS_UBS': 'TextEdit',
    'CNES': 'Hidden',
    'NOMEUBS': 'Hidden'
});
lyr_readeabrangnciadeUBS_11.set('fieldLabels', {
    'AREAKM2': 'inline label - visible with data',
    'CRS_STS_UB': 'hidden',
    'CNES_UBS': 'inline label - visible with data',
    'CNESUBS': 'hidden',
    'NOME_UBS': 'inline label - visible with data',
    'STS_UBS': 'inline label - visible with data',
    'CRS_UBS': 'inline label - visible with data',
    'CNES': 'hidden',
    'NOMEUBS': 'hidden'
});

lyr_readeabrangnciadeUBS_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([650199.621870, 5914960.785259, 699942.889553, 5941050.461201]);
var wms_layers = [];

var format_conce_metrop_utm_0 = new ol.format.GeoJSON();
var features_conce_metrop_utm_0 = format_conce_metrop_utm_0.readFeatures(json_conce_metrop_utm_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_conce_metrop_utm_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_conce_metrop_utm_0.addFeatures(features_conce_metrop_utm_0);
var lyr_conce_metrop_utm_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_conce_metrop_utm_0, 
                style: style_conce_metrop_utm_0,
                popuplayertitle: 'conce_metrop_utm',
                interactive: false,
                title: '<img src="styles/legend/conce_metrop_utm_0.png" /> conce_metrop_utm'
            });
var format_Indicadores_barrios_AMC_1 = new ol.format.GeoJSON();
var features_Indicadores_barrios_AMC_1 = format_Indicadores_barrios_AMC_1.readFeatures(json_Indicadores_barrios_AMC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Indicadores_barrios_AMC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indicadores_barrios_AMC_1.addFeatures(features_Indicadores_barrios_AMC_1);
var lyr_Indicadores_barrios_AMC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indicadores_barrios_AMC_1, 
                style: style_Indicadores_barrios_AMC_1,
                popuplayertitle: 'Indicadores_barrios_AMC',
                interactive: false,
                title: '<img src="styles/legend/Indicadores_barrios_AMC_1.png" /> Indicadores_barrios_AMC'
            });
var format_PlazadeArmasdeTom_2 = new ol.format.GeoJSON();
var features_PlazadeArmasdeTom_2 = format_PlazadeArmasdeTom_2.readFeatures(json_PlazadeArmasdeTom_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_PlazadeArmasdeTom_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlazadeArmasdeTom_2.addFeatures(features_PlazadeArmasdeTom_2);
cluster_PlazadeArmasdeTom_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PlazadeArmasdeTom_2
});
var lyr_PlazadeArmasdeTom_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PlazadeArmasdeTom_2, 
                style: style_PlazadeArmasdeTom_2,
                popuplayertitle: 'Plaza de Armas de Tomé',
                interactive: true,
                title: '<img src="styles/legend/PlazadeArmasdeTom_2.png" /> Plaza de Armas de Tomé'
            });
var format_Estadio_Tom_3 = new ol.format.GeoJSON();
var features_Estadio_Tom_3 = format_Estadio_Tom_3.readFeatures(json_Estadio_Tom_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Estadio_Tom_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estadio_Tom_3.addFeatures(features_Estadio_Tom_3);
var lyr_Estadio_Tom_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estadio_Tom_3, 
                style: style_Estadio_Tom_3,
                popuplayertitle: 'Estadio_Tomé',
                interactive: true,
                title: '<img src="styles/legend/Estadio_Tom_3.png" /> Estadio_Tomé'
            });
var format_PlazadeArmasdePenco_4 = new ol.format.GeoJSON();
var features_PlazadeArmasdePenco_4 = format_PlazadeArmasdePenco_4.readFeatures(json_PlazadeArmasdePenco_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_PlazadeArmasdePenco_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlazadeArmasdePenco_4.addFeatures(features_PlazadeArmasdePenco_4);
cluster_PlazadeArmasdePenco_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PlazadeArmasdePenco_4
});
var lyr_PlazadeArmasdePenco_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PlazadeArmasdePenco_4, 
                style: style_PlazadeArmasdePenco_4,
                popuplayertitle: 'Plaza de Armas de Penco',
                interactive: true,
                title: '<img src="styles/legend/PlazadeArmasdePenco_4.png" /> Plaza de Armas de Penco'
            });
var format_Cementerio_Penco_5 = new ol.format.GeoJSON();
var features_Cementerio_Penco_5 = format_Cementerio_Penco_5.readFeatures(json_Cementerio_Penco_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Cementerio_Penco_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cementerio_Penco_5.addFeatures(features_Cementerio_Penco_5);
var lyr_Cementerio_Penco_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cementerio_Penco_5, 
                style: style_Cementerio_Penco_5,
                popuplayertitle: 'Cementerio_Penco',
                interactive: true,
                title: '<img src="styles/legend/Cementerio_Penco_5.png" /> Cementerio_Penco'
            });
var format_ClubHpicodeConcepcin_6 = new ol.format.GeoJSON();
var features_ClubHpicodeConcepcin_6 = format_ClubHpicodeConcepcin_6.readFeatures(json_ClubHpicodeConcepcin_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_ClubHpicodeConcepcin_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClubHpicodeConcepcin_6.addFeatures(features_ClubHpicodeConcepcin_6);
var lyr_ClubHpicodeConcepcin_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClubHpicodeConcepcin_6, 
                style: style_ClubHpicodeConcepcin_6,
                popuplayertitle: 'Club Hípico de Concepción',
                interactive: true,
                title: '<img src="styles/legend/ClubHpicodeConcepcin_6.png" /> Club Hípico de Concepción'
            });
var format_plaza_armas_talcahuano_7 = new ol.format.GeoJSON();
var features_plaza_armas_talcahuano_7 = format_plaza_armas_talcahuano_7.readFeatures(json_plaza_armas_talcahuano_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_plaza_armas_talcahuano_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plaza_armas_talcahuano_7.addFeatures(features_plaza_armas_talcahuano_7);
var lyr_plaza_armas_talcahuano_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_plaza_armas_talcahuano_7, 
                style: style_plaza_armas_talcahuano_7,
                popuplayertitle: 'plaza_armas_talcahuano',
                interactive: true,
                title: '<img src="styles/legend/plaza_armas_talcahuano_7.png" /> plaza_armas_talcahuano'
            });
var format_OctavaCompaadelCuerpodeBomberosdeTalcahuano_8 = new ol.format.GeoJSON();
var features_OctavaCompaadelCuerpodeBomberosdeTalcahuano_8 = format_OctavaCompaadelCuerpodeBomberosdeTalcahuano_8.readFeatures(json_OctavaCompaadelCuerpodeBomberosdeTalcahuano_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_OctavaCompaadelCuerpodeBomberosdeTalcahuano_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OctavaCompaadelCuerpodeBomberosdeTalcahuano_8.addFeatures(features_OctavaCompaadelCuerpodeBomberosdeTalcahuano_8);
cluster_OctavaCompaadelCuerpodeBomberosdeTalcahuano_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_OctavaCompaadelCuerpodeBomberosdeTalcahuano_8
});
var lyr_OctavaCompaadelCuerpodeBomberosdeTalcahuano_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_OctavaCompaadelCuerpodeBomberosdeTalcahuano_8, 
                style: style_OctavaCompaadelCuerpodeBomberosdeTalcahuano_8,
                popuplayertitle: 'Octava Compañía del Cuerpo de Bomberos de Talcahuano',
                interactive: true,
                title: '<img src="styles/legend/OctavaCompaadelCuerpodeBomberosdeTalcahuano_8.png" /> Octava Compañía del Cuerpo de Bomberos de Talcahuano'
            });
var format_MunicipalidadDeHualpn_9 = new ol.format.GeoJSON();
var features_MunicipalidadDeHualpn_9 = format_MunicipalidadDeHualpn_9.readFeatures(json_MunicipalidadDeHualpn_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_MunicipalidadDeHualpn_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipalidadDeHualpn_9.addFeatures(features_MunicipalidadDeHualpn_9);
cluster_MunicipalidadDeHualpn_9 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_MunicipalidadDeHualpn_9
});
var lyr_MunicipalidadDeHualpn_9 = new ol.layer.Vector({
                declutter: false,
                source:cluster_MunicipalidadDeHualpn_9, 
                style: style_MunicipalidadDeHualpn_9,
                popuplayertitle: 'Municipalidad De Hualpén',
                interactive: true,
                title: '<img src="styles/legend/MunicipalidadDeHualpn_9.png" /> Municipalidad De Hualpén'
            });
var format_bar_callejon_concepcin_10 = new ol.format.GeoJSON();
var features_bar_callejon_concepcin_10 = format_bar_callejon_concepcin_10.readFeatures(json_bar_callejon_concepcin_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_bar_callejon_concepcin_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bar_callejon_concepcin_10.addFeatures(features_bar_callejon_concepcin_10);
cluster_bar_callejon_concepcin_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_bar_callejon_concepcin_10
});
var lyr_bar_callejon_concepcin_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_bar_callejon_concepcin_10, 
                style: style_bar_callejon_concepcin_10,
                popuplayertitle: 'bar_callejon_concepción',
                interactive: true,
                title: '<img src="styles/legend/bar_callejon_concepcin_10.png" /> bar_callejon_concepción'
            });
var format_PalaciodelosTribunalesdeJusticia_11 = new ol.format.GeoJSON();
var features_PalaciodelosTribunalesdeJusticia_11 = format_PalaciodelosTribunalesdeJusticia_11.readFeatures(json_PalaciodelosTribunalesdeJusticia_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_PalaciodelosTribunalesdeJusticia_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PalaciodelosTribunalesdeJusticia_11.addFeatures(features_PalaciodelosTribunalesdeJusticia_11);
cluster_PalaciodelosTribunalesdeJusticia_11 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PalaciodelosTribunalesdeJusticia_11
});
var lyr_PalaciodelosTribunalesdeJusticia_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PalaciodelosTribunalesdeJusticia_11, 
                style: style_PalaciodelosTribunalesdeJusticia_11,
                popuplayertitle: 'Palacio de los Tribunales de Justicia',
                interactive: true,
                title: '<img src="styles/legend/PalaciodelosTribunalesdeJusticia_11.png" /> Palacio de los Tribunales de Justicia'
            });
var format_Rectoria_UdeC_12 = new ol.format.GeoJSON();
var features_Rectoria_UdeC_12 = format_Rectoria_UdeC_12.readFeatures(json_Rectoria_UdeC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Rectoria_UdeC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rectoria_UdeC_12.addFeatures(features_Rectoria_UdeC_12);
cluster_Rectoria_UdeC_12 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Rectoria_UdeC_12
});
var lyr_Rectoria_UdeC_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Rectoria_UdeC_12, 
                style: style_Rectoria_UdeC_12,
                popuplayertitle: 'Rectoria_UdeC',
                interactive: true,
                title: '<img src="styles/legend/Rectoria_UdeC_12.png" /> Rectoria_UdeC'
            });
var format_Estadio_municipal_Chiguayante_13 = new ol.format.GeoJSON();
var features_Estadio_municipal_Chiguayante_13 = format_Estadio_municipal_Chiguayante_13.readFeatures(json_Estadio_municipal_Chiguayante_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Estadio_municipal_Chiguayante_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estadio_municipal_Chiguayante_13.addFeatures(features_Estadio_municipal_Chiguayante_13);
cluster_Estadio_municipal_Chiguayante_13 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Estadio_municipal_Chiguayante_13
});
var lyr_Estadio_municipal_Chiguayante_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Estadio_municipal_Chiguayante_13, 
                style: style_Estadio_municipal_Chiguayante_13,
                popuplayertitle: 'Estadio_municipal_Chiguayante',
                interactive: true,
                title: '<img src="styles/legend/Estadio_municipal_Chiguayante_13.png" /> Estadio_municipal_Chiguayante'
            });
var format_terminal_chiguayante_14 = new ol.format.GeoJSON();
var features_terminal_chiguayante_14 = format_terminal_chiguayante_14.readFeatures(json_terminal_chiguayante_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_terminal_chiguayante_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_terminal_chiguayante_14.addFeatures(features_terminal_chiguayante_14);
var lyr_terminal_chiguayante_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_terminal_chiguayante_14, 
                style: style_terminal_chiguayante_14,
                popuplayertitle: 'terminal_chiguayante',
                interactive: true,
                title: '<img src="styles/legend/terminal_chiguayante_14.png" /> terminal_chiguayante'
            });
var format_cancha_spdlp_15 = new ol.format.GeoJSON();
var features_cancha_spdlp_15 = format_cancha_spdlp_15.readFeatures(json_cancha_spdlp_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_cancha_spdlp_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cancha_spdlp_15.addFeatures(features_cancha_spdlp_15);
var lyr_cancha_spdlp_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cancha_spdlp_15, 
                style: style_cancha_spdlp_15,
                popuplayertitle: 'cancha_spdlp',
                interactive: true,
                title: '<img src="styles/legend/cancha_spdlp_15.png" /> cancha_spdlp'
            });
var format_gimnasio_municipal_spdlp_16 = new ol.format.GeoJSON();
var features_gimnasio_municipal_spdlp_16 = format_gimnasio_municipal_spdlp_16.readFeatures(json_gimnasio_municipal_spdlp_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_gimnasio_municipal_spdlp_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gimnasio_municipal_spdlp_16.addFeatures(features_gimnasio_municipal_spdlp_16);
cluster_gimnasio_municipal_spdlp_16 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_gimnasio_municipal_spdlp_16
});
var lyr_gimnasio_municipal_spdlp_16 = new ol.layer.Vector({
                declutter: false,
                source:cluster_gimnasio_municipal_spdlp_16, 
                style: style_gimnasio_municipal_spdlp_16,
                popuplayertitle: 'gimnasio_municipal_spdlp',
                interactive: true,
                title: '<img src="styles/legend/gimnasio_municipal_spdlp_16.png" /> gimnasio_municipal_spdlp'
            });
var format_polideportivo_coronel_17 = new ol.format.GeoJSON();
var features_polideportivo_coronel_17 = format_polideportivo_coronel_17.readFeatures(json_polideportivo_coronel_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_polideportivo_coronel_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polideportivo_coronel_17.addFeatures(features_polideportivo_coronel_17);
var lyr_polideportivo_coronel_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polideportivo_coronel_17, 
                style: style_polideportivo_coronel_17,
                popuplayertitle: 'polideportivo_coronel',
                interactive: true,
                title: '<img src="styles/legend/polideportivo_coronel_17.png" /> polideportivo_coronel'
            });
var format_Mall_Coronel_18 = new ol.format.GeoJSON();
var features_Mall_Coronel_18 = format_Mall_Coronel_18.readFeatures(json_Mall_Coronel_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Mall_Coronel_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mall_Coronel_18.addFeatures(features_Mall_Coronel_18);
var lyr_Mall_Coronel_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mall_Coronel_18, 
                style: style_Mall_Coronel_18,
                popuplayertitle: 'Mall_Coronel',
                interactive: true,
                title: '<img src="styles/legend/Mall_Coronel_18.png" /> Mall_Coronel'
            });
var format_Lata_Jurel_Coronel_19 = new ol.format.GeoJSON();
var features_Lata_Jurel_Coronel_19 = format_Lata_Jurel_Coronel_19.readFeatures(json_Lata_Jurel_Coronel_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Lata_Jurel_Coronel_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lata_Jurel_Coronel_19.addFeatures(features_Lata_Jurel_Coronel_19);
cluster_Lata_Jurel_Coronel_19 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Lata_Jurel_Coronel_19
});
var lyr_Lata_Jurel_Coronel_19 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Lata_Jurel_Coronel_19, 
                style: style_Lata_Jurel_Coronel_19,
                popuplayertitle: 'Lata_Jurel_Coronel',
                interactive: true,
                title: '<img src="styles/legend/Lata_Jurel_Coronel_19.png" /> Lata_Jurel_Coronel'
            });
var format_Plaza_armas_Lota_20 = new ol.format.GeoJSON();
var features_Plaza_armas_Lota_20 = format_Plaza_armas_Lota_20.readFeatures(json_Plaza_armas_Lota_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Plaza_armas_Lota_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plaza_armas_Lota_20.addFeatures(features_Plaza_armas_Lota_20);
cluster_Plaza_armas_Lota_20 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Plaza_armas_Lota_20
});
var lyr_Plaza_armas_Lota_20 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Plaza_armas_Lota_20, 
                style: style_Plaza_armas_Lota_20,
                popuplayertitle: 'Plaza_armas_Lota',
                interactive: true,
                title: '<img src="styles/legend/Plaza_armas_Lota_20.png" /> Plaza_armas_Lota'
            });
var format_Gimnasio_Lota_21 = new ol.format.GeoJSON();
var features_Gimnasio_Lota_21 = format_Gimnasio_Lota_21.readFeatures(json_Gimnasio_Lota_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Gimnasio_Lota_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gimnasio_Lota_21.addFeatures(features_Gimnasio_Lota_21);
cluster_Gimnasio_Lota_21 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Gimnasio_Lota_21
});
var lyr_Gimnasio_Lota_21 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Gimnasio_Lota_21, 
                style: style_Gimnasio_Lota_21,
                popuplayertitle: 'Gimnasio_Lota',
                interactive: true,
                title: '<img src="styles/legend/Gimnasio_Lota_21.png" /> Gimnasio_Lota'
            });

lyr_conce_metrop_utm_0.setVisible(true);lyr_Indicadores_barrios_AMC_1.setVisible(true);lyr_PlazadeArmasdeTom_2.setVisible(true);lyr_Estadio_Tom_3.setVisible(true);lyr_PlazadeArmasdePenco_4.setVisible(true);lyr_Cementerio_Penco_5.setVisible(true);lyr_ClubHpicodeConcepcin_6.setVisible(true);lyr_plaza_armas_talcahuano_7.setVisible(true);lyr_OctavaCompaadelCuerpodeBomberosdeTalcahuano_8.setVisible(true);lyr_MunicipalidadDeHualpn_9.setVisible(true);lyr_bar_callejon_concepcin_10.setVisible(true);lyr_PalaciodelosTribunalesdeJusticia_11.setVisible(true);lyr_Rectoria_UdeC_12.setVisible(true);lyr_Estadio_municipal_Chiguayante_13.setVisible(true);lyr_terminal_chiguayante_14.setVisible(true);lyr_cancha_spdlp_15.setVisible(true);lyr_gimnasio_municipal_spdlp_16.setVisible(true);lyr_polideportivo_coronel_17.setVisible(true);lyr_Mall_Coronel_18.setVisible(true);lyr_Lata_Jurel_Coronel_19.setVisible(true);lyr_Plaza_armas_Lota_20.setVisible(true);lyr_Gimnasio_Lota_21.setVisible(true);
var layersList = [lyr_conce_metrop_utm_0,lyr_Indicadores_barrios_AMC_1,lyr_PlazadeArmasdeTom_2,lyr_Estadio_Tom_3,lyr_PlazadeArmasdePenco_4,lyr_Cementerio_Penco_5,lyr_ClubHpicodeConcepcin_6,lyr_plaza_armas_talcahuano_7,lyr_OctavaCompaadelCuerpodeBomberosdeTalcahuano_8,lyr_MunicipalidadDeHualpn_9,lyr_bar_callejon_concepcin_10,lyr_PalaciodelosTribunalesdeJusticia_11,lyr_Rectoria_UdeC_12,lyr_Estadio_municipal_Chiguayante_13,lyr_terminal_chiguayante_14,lyr_cancha_spdlp_15,lyr_gimnasio_municipal_spdlp_16,lyr_polideportivo_coronel_17,lyr_Mall_Coronel_18,lyr_Lata_Jurel_Coronel_19,lyr_Plaza_armas_Lota_20,lyr_Gimnasio_Lota_21];
lyr_conce_metrop_utm_0.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_Indicadores_barrios_AMC_1.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_PlazadeArmasdeTom_2.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Barrio': 'Barrio', 'Coordenada': 'Coordenada', 'Dirección': 'Dirección', 'Fundación': 'Fundación', });
lyr_Estadio_Tom_3.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Barrio': 'Barrio', 'Coordenada': 'Coordenada', 'Dirección': 'Dirección', 'Fundación': 'Fundación', });
lyr_PlazadeArmasdePenco_4.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Barrio': 'Barrio', 'Coordenada': 'Coordenada', 'Dirección': 'Dirección', 'Fundación': 'Fundación', });
lyr_Cementerio_Penco_5.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Barrio': 'Barrio', 'Coordenada': 'Coordenada', 'Horario': 'Horario', 'Contacto': 'Contacto', });
lyr_ClubHpicodeConcepcin_6.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Barrio': 'Barrio', 'Coordenada': 'Coordenada', 'Dirección': 'Dirección', 'Contacto': 'Contacto', });
lyr_plaza_armas_talcahuano_7.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Barrio': 'Barrio', 'Coordenada': 'Coordenada', 'Dirección': 'Dirección', 'Fundación': 'Fundación', });
lyr_OctavaCompaadelCuerpodeBomberosdeTalcahuano_8.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Barrio': 'Barrio', 'Coordenada': 'Coordenada', 'Dirección': 'Dirección', 'Horario': 'Horario', });
lyr_MunicipalidadDeHualpn_9.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Barrio': 'Barrio', 'Coordenada': 'Coordenada', 'Dirección': 'Dirección', 'Horario': 'Horario', });
lyr_bar_callejon_concepcin_10.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Barrio': 'Barrio', 'Coordenada': 'Coordenada', 'Dirección': 'Dirección', 'Horario': 'Horario', 'Video': 'Video', });
lyr_PalaciodelosTribunalesdeJusticia_11.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Barrio': 'Barrio', 'Coordenada': 'Coordenada', 'Dirección': 'Dirección', 'Horario': 'Horario', });
lyr_Rectoria_UdeC_12.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Barrio': 'Barrio', 'Coordenada': 'Coordenada', 'Dirección': 'Dirección', 'Horario': 'Horario', });
lyr_Estadio_municipal_Chiguayante_13.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Barrio': 'Barrio', 'Coordenada': 'Coordenada', 'Dirección': 'Dirección', 'Contacto': 'Contacto', });
lyr_terminal_chiguayante_14.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Barrio': 'Barrio', 'Coordenada': 'Coordenada', 'Direciión': 'Direciión', 'Contacto': 'Contacto', });
lyr_cancha_spdlp_15.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Barrio': 'Barrio', 'Coordenada': 'Coordenada', 'Dirección': 'Dirección', 'Fundación': 'Fundación', });
lyr_gimnasio_municipal_spdlp_16.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Barrio': 'Barrio', 'Coordenada': 'Coordenada', 'Dirección': 'Dirección', 'Contacto': 'Contacto', });
lyr_polideportivo_coronel_17.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Barrio': 'Barrio', 'Coordenada': 'Coordenada', 'Dirección': 'Dirección', 'Fundación': 'Fundación', });
lyr_Mall_Coronel_18.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Barrio': 'Barrio', 'Coordenada': 'Coordenada', 'Dirección': 'Dirección', 'Horario': 'Horario', });
lyr_Lata_Jurel_Coronel_19.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Barrio': 'Barrio', 'Coordenada': 'Coordenada', 'Dirección': 'Dirección', 'Fundación': 'Fundación', });
lyr_Plaza_armas_Lota_20.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Barrio': 'Barrio', 'Coordenada': 'Coordenada', 'Dirección': 'Dirección', 'fundación': 'fundación', });
lyr_Gimnasio_Lota_21.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Barrio': 'Barrio', 'Dirección': 'Dirección', 'Horarios': 'Horarios', 'Fundación': 'Fundación', });
lyr_conce_metrop_utm_0.set('fieldImages', {'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_Indicadores_barrios_AMC_1.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', });
lyr_PlazadeArmasdeTom_2.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Barrio': 'TextEdit', 'Coordenada': 'TextEdit', 'Dirección': 'TextEdit', 'Fundación': 'TextEdit', });
lyr_Estadio_Tom_3.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Barrio': 'TextEdit', 'Coordenada': 'TextEdit', 'Dirección': 'TextEdit', 'Fundación': 'TextEdit', });
lyr_PlazadeArmasdePenco_4.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Barrio': 'TextEdit', 'Coordenada': 'TextEdit', 'Dirección': 'TextEdit', 'Fundación': 'TextEdit', });
lyr_Cementerio_Penco_5.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Barrio': 'TextEdit', 'Coordenada': 'TextEdit', 'Horario': 'TextEdit', 'Contacto': 'TextEdit', });
lyr_ClubHpicodeConcepcin_6.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Barrio': 'TextEdit', 'Coordenada': 'TextEdit', 'Dirección': 'TextEdit', 'Contacto': 'TextEdit', });
lyr_plaza_armas_talcahuano_7.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Barrio': 'TextEdit', 'Coordenada': 'TextEdit', 'Dirección': 'TextEdit', 'Fundación': 'TextEdit', });
lyr_OctavaCompaadelCuerpodeBomberosdeTalcahuano_8.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Barrio': 'TextEdit', 'Coordenada': 'TextEdit', 'Dirección': 'TextEdit', 'Horario': 'TextEdit', });
lyr_MunicipalidadDeHualpn_9.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Barrio': 'TextEdit', 'Coordenada': 'TextEdit', 'Dirección': 'TextEdit', 'Horario': 'TextEdit', });
lyr_bar_callejon_concepcin_10.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Barrio': 'TextEdit', 'Coordenada': 'TextEdit', 'Dirección': 'TextEdit', 'Horario': 'TextEdit', 'Video': 'ExternalResource', });
lyr_PalaciodelosTribunalesdeJusticia_11.set('fieldImages', {'id': 'TextEdit', 'Nombre': '', 'Barrio': '', 'Coordenada': '', 'Dirección': '', 'Horario': '', });
lyr_Rectoria_UdeC_12.set('fieldImages', {'id': 'TextEdit', 'Nombre': '', 'Barrio': '', 'Coordenada': '', 'Dirección': '', 'Horario': '', });
lyr_Estadio_municipal_Chiguayante_13.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Barrio': 'TextEdit', 'Coordenada': 'TextEdit', 'Dirección': 'TextEdit', 'Contacto': 'TextEdit', });
lyr_terminal_chiguayante_14.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Barrio': 'TextEdit', 'Coordenada': 'TextEdit', 'Direciión': 'TextEdit', 'Contacto': 'TextEdit', });
lyr_cancha_spdlp_15.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Barrio': 'TextEdit', 'Coordenada': 'TextEdit', 'Dirección': 'TextEdit', 'Fundación': 'TextEdit', });
lyr_gimnasio_municipal_spdlp_16.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Barrio': 'TextEdit', 'Coordenada': 'TextEdit', 'Dirección': 'TextEdit', 'Contacto': 'TextEdit', });
lyr_polideportivo_coronel_17.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Barrio': 'TextEdit', 'Coordenada': 'TextEdit', 'Dirección': 'TextEdit', 'Fundación': 'TextEdit', });
lyr_Mall_Coronel_18.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Barrio': 'TextEdit', 'Coordenada': 'TextEdit', 'Dirección': 'TextEdit', 'Horario': 'TextEdit', });
lyr_Lata_Jurel_Coronel_19.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Barrio': 'TextEdit', 'Coordenada': 'TextEdit', 'Dirección': 'TextEdit', 'Fundación': 'TextEdit', });
lyr_Plaza_armas_Lota_20.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Barrio': 'TextEdit', 'Coordenada': 'TextEdit', 'Dirección': 'TextEdit', 'fundación': 'TextEdit', });
lyr_Gimnasio_Lota_21.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Barrio': 'TextEdit', 'Dirección': 'TextEdit', 'Horarios': 'TextEdit', 'Fundación': 'TextEdit', });
lyr_conce_metrop_utm_0.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_Indicadores_barrios_AMC_1.set('fieldLabels', {'Id': 'no label', 'Nombre': 'no label', 'Area': 'no label', 'hab_m2': 'no label', 'Sum_Poblac': 'no label', 'av_hab': 'no label', 'Long_tLic': 'no label', 'Long_tNLic': 'no label', 'Suma_Trans': 'no label', 'porc_cober': 'no label', 'Distance': 'no label', 'LongcicloK': 'no label', 'Long_rvial': 'no label', });
lyr_PlazadeArmasdeTom_2.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Barrio': 'no label', 'Coordenada': 'no label', 'Dirección': 'no label', 'Fundación': 'no label', });
lyr_Estadio_Tom_3.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Barrio': 'no label', 'Coordenada': 'no label', 'Dirección': 'no label', 'Fundación': 'no label', });
lyr_PlazadeArmasdePenco_4.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Barrio': 'no label', 'Coordenada': 'no label', 'Dirección': 'no label', 'Fundación': 'no label', });
lyr_Cementerio_Penco_5.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Barrio': 'no label', 'Coordenada': 'no label', 'Horario': 'no label', 'Contacto': 'no label', });
lyr_ClubHpicodeConcepcin_6.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Barrio': 'no label', 'Coordenada': 'no label', 'Dirección': 'no label', 'Contacto': 'no label', });
lyr_plaza_armas_talcahuano_7.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Barrio': 'no label', 'Coordenada': 'no label', 'Dirección': 'no label', 'Fundación': 'no label', });
lyr_OctavaCompaadelCuerpodeBomberosdeTalcahuano_8.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Barrio': 'no label', 'Coordenada': 'no label', 'Dirección': 'no label', 'Horario': 'no label', });
lyr_MunicipalidadDeHualpn_9.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Barrio': 'no label', 'Coordenada': 'no label', 'Dirección': 'no label', 'Horario': 'no label', });
lyr_bar_callejon_concepcin_10.set('fieldLabels', {'id': 'no label', 'Nombre': 'inline label - always visible', 'Barrio': 'inline label - always visible', 'Coordenada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Horario': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_PalaciodelosTribunalesdeJusticia_11.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Barrio': 'no label', 'Coordenada': 'no label', 'Dirección': 'no label', 'Horario': 'no label', });
lyr_Rectoria_UdeC_12.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Barrio': 'no label', 'Coordenada': 'no label', 'Dirección': 'no label', 'Horario': 'no label', });
lyr_Estadio_municipal_Chiguayante_13.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Barrio': 'no label', 'Coordenada': 'no label', 'Dirección': 'no label', 'Contacto': 'no label', });
lyr_terminal_chiguayante_14.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Barrio': 'no label', 'Coordenada': 'no label', 'Direciión': 'no label', 'Contacto': 'no label', });
lyr_cancha_spdlp_15.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Barrio': 'no label', 'Coordenada': 'no label', 'Dirección': 'no label', 'Fundación': 'no label', });
lyr_gimnasio_municipal_spdlp_16.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Barrio': 'no label', 'Coordenada': 'no label', 'Dirección': 'no label', 'Contacto': 'no label', });
lyr_polideportivo_coronel_17.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Barrio': 'no label', 'Coordenada': 'no label', 'Dirección': 'no label', 'Fundación': 'no label', });
lyr_Mall_Coronel_18.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Barrio': 'no label', 'Coordenada': 'no label', 'Dirección': 'no label', 'Horario': 'no label', });
lyr_Lata_Jurel_Coronel_19.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Barrio': 'no label', 'Coordenada': 'no label', 'Dirección': 'no label', 'Fundación': 'no label', });
lyr_Plaza_armas_Lota_20.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Barrio': 'no label', 'Coordenada': 'no label', 'Dirección': 'no label', 'fundación': 'no label', });
lyr_Gimnasio_Lota_21.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Barrio': 'no label', 'Dirección': 'no label', 'Horarios': 'no label', 'Fundación': 'no label', });
lyr_Gimnasio_Lota_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
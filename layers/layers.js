var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Bine_1 = new ol.format.GeoJSON();
var features_Bine_1 = format_Bine_1.readFeatures(json_Bine_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bine_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bine_1.addFeatures(features_Bine_1);
var lyr_Bine_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bine_1, 
                style: style_Bine_1,
                interactive: true,
                title: '<img src="styles/legend/Bine_1.png" /> Bine'
            });
var format_Beachflag_2 = new ol.format.GeoJSON();
var features_Beachflag_2 = format_Beachflag_2.readFeatures(json_Beachflag_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beachflag_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beachflag_2.addFeatures(features_Beachflag_2);
var lyr_Beachflag_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Beachflag_2, 
                style: style_Beachflag_2,
                interactive: true,
                title: '<img src="styles/legend/Beachflag_2.png" /> Beach flag'
            });
var format_Portal_3 = new ol.format.GeoJSON();
var features_Portal_3 = format_Portal_3.readFeatures(json_Portal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Portal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Portal_3.addFeatures(features_Portal_3);
var lyr_Portal_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Portal_3, 
                style: style_Portal_3,
                interactive: true,
                title: '<img src="styles/legend/Portal_3.png" /> Portal'
            });
var format_Sponzori_4 = new ol.format.GeoJSON();
var features_Sponzori_4 = format_Sponzori_4.readFeatures(json_Sponzori_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sponzori_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sponzori_4.addFeatures(features_Sponzori_4);
var lyr_Sponzori_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sponzori_4, 
                style: style_Sponzori_4,
                interactive: true,
                title: '<img src="styles/legend/Sponzori_4.png" /> Sponzori'
            });
var format_tandovi_5 = new ol.format.GeoJSON();
var features_tandovi_5 = format_tandovi_5.readFeatures(json_tandovi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tandovi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tandovi_5.addFeatures(features_tandovi_5);
var lyr_tandovi_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tandovi_5, 
                style: style_tandovi_5,
                interactive: true,
                title: '<img src="styles/legend/tandovi_5.png" /> Štandovi'
            });
var format_Osijekkuice_6 = new ol.format.GeoJSON();
var features_Osijekkuice_6 = format_Osijekkuice_6.readFeatures(json_Osijekkuice_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Osijekkuice_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Osijekkuice_6.addFeatures(features_Osijekkuice_6);
var lyr_Osijekkuice_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Osijekkuice_6, 
                style: style_Osijekkuice_6,
                interactive: true,
                title: '<img src="styles/legend/Osijekkuice_6.png" /> Osijek kućice'
            });
var format_Biljekuice_7 = new ol.format.GeoJSON();
var features_Biljekuice_7 = format_Biljekuice_7.readFeatures(json_Biljekuice_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biljekuice_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biljekuice_7.addFeatures(features_Biljekuice_7);
var lyr_Biljekuice_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Biljekuice_7, 
                style: style_Biljekuice_7,
                interactive: true,
                title: '<img src="styles/legend/Biljekuice_7.png" /> Bilje kućice'
            });
var format_akovokuice_8 = new ol.format.GeoJSON();
var features_akovokuice_8 = format_akovokuice_8.readFeatures(json_akovokuice_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_akovokuice_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_akovokuice_8.addFeatures(features_akovokuice_8);
var lyr_akovokuice_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_akovokuice_8, 
                style: style_akovokuice_8,
                interactive: true,
                title: '<img src="styles/legend/akovokuice_8.png" /> Đakovo kućice'
            });
var format_Valpovokuice_9 = new ol.format.GeoJSON();
var features_Valpovokuice_9 = format_Valpovokuice_9.readFeatures(json_Valpovokuice_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Valpovokuice_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Valpovokuice_9.addFeatures(features_Valpovokuice_9);
var lyr_Valpovokuice_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Valpovokuice_9, 
                style: style_Valpovokuice_9,
                interactive: true,
                title: '<img src="styles/legend/Valpovokuice_9.png" /> Valpovo kućice'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Bine_1.setVisible(true);lyr_Beachflag_2.setVisible(true);lyr_Portal_3.setVisible(true);lyr_Sponzori_4.setVisible(true);lyr_tandovi_5.setVisible(true);lyr_Osijekkuice_6.setVisible(true);lyr_Biljekuice_7.setVisible(true);lyr_akovokuice_8.setVisible(true);lyr_Valpovokuice_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Bine_1,lyr_Beachflag_2,lyr_Portal_3,lyr_Sponzori_4,lyr_tandovi_5,lyr_Osijekkuice_6,lyr_Biljekuice_7,lyr_akovokuice_8,lyr_Valpovokuice_9];
lyr_Bine_1.set('fieldAliases', {'id': 'id', });
lyr_Beachflag_2.set('fieldAliases', {'id': 'id', 'Ime': 'Ime', });
lyr_Portal_3.set('fieldAliases', {'id': 'id', });
lyr_Sponzori_4.set('fieldAliases', {'id': 'id', 'Ime': 'Ime', });
lyr_tandovi_5.set('fieldAliases', {'id': 'id', 'Broj': 'Broj', 'Opis': 'Opis', 'Opis1': 'Opis1', });
lyr_Osijekkuice_6.set('fieldAliases', {'id': 'id', 'Ime': 'Ime', 'Vrsta': 'Vrsta', 'Tko': 'Tko', });
lyr_Biljekuice_7.set('fieldAliases', {'id': 'id', 'Ime': 'Ime', 'Vrsta': 'Vrsta', 'Tko': 'Tko', });
lyr_akovokuice_8.set('fieldAliases', {'id': 'id', 'Ime': 'Ime', 'Vrsta': 'Vrsta', 'Tko': 'Tko', });
lyr_Valpovokuice_9.set('fieldAliases', {'id': 'id', 'Ime': 'Ime', 'Vinogorje': 'Vinogorje', 'Objekt': 'Objekt', 'Vrsta': 'Vrsta', 'layer': 'layer', 'path': 'path', });
lyr_Bine_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Beachflag_2.set('fieldImages', {'id': 'TextEdit', 'Ime': 'TextEdit', });
lyr_Portal_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Sponzori_4.set('fieldImages', {'id': 'TextEdit', 'Ime': 'TextEdit', });
lyr_tandovi_5.set('fieldImages', {'id': 'TextEdit', 'Broj': 'TextEdit', 'Opis': 'TextEdit', 'Opis1': 'TextEdit', });
lyr_Osijekkuice_6.set('fieldImages', {'id': 'TextEdit', 'Ime': 'TextEdit', 'Vrsta': 'TextEdit', 'Tko': 'TextEdit', });
lyr_Biljekuice_7.set('fieldImages', {'id': 'TextEdit', 'Ime': 'TextEdit', 'Vrsta': 'TextEdit', 'Tko': 'TextEdit', });
lyr_akovokuice_8.set('fieldImages', {'id': 'TextEdit', 'Ime': 'TextEdit', 'Vrsta': 'TextEdit', 'Tko': 'TextEdit', });
lyr_Valpovokuice_9.set('fieldImages', {'id': 'TextEdit', 'Ime': 'TextEdit', 'Vinogorje': 'TextEdit', 'Objekt': 'TextEdit', 'Vrsta': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Bine_1.set('fieldLabels', {'id': 'no label', });
lyr_Beachflag_2.set('fieldLabels', {'id': 'no label', 'Ime': 'no label', });
lyr_Portal_3.set('fieldLabels', {'id': 'no label', });
lyr_Sponzori_4.set('fieldLabels', {'id': 'header label', 'Ime': 'no label', });
lyr_tandovi_5.set('fieldLabels', {'id': 'no label', 'Broj': 'no label', 'Opis': 'no label', 'Opis1': 'no label', });
lyr_Osijekkuice_6.set('fieldLabels', {'id': 'no label', 'Ime': 'no label', 'Vrsta': 'no label', 'Tko': 'no label', });
lyr_Biljekuice_7.set('fieldLabels', {'id': 'no label', 'Ime': 'no label', 'Vrsta': 'no label', 'Tko': 'no label', });
lyr_akovokuice_8.set('fieldLabels', {'id': 'no label', 'Ime': 'no label', 'Vrsta': 'no label', 'Tko': 'no label', });
lyr_Valpovokuice_9.set('fieldLabels', {'id': 'no label', 'Ime': 'no label', 'Vinogorje': 'no label', 'Objekt': 'no label', 'Vrsta': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Valpovokuice_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];


    var projection_CorrectedReflectanceTrueColorMODISTerra_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_CorrectedReflectanceTrueColorMODISTerra_0 = projection_CorrectedReflectanceTrueColorMODISTerra_0.getExtent();
    var size_CorrectedReflectanceTrueColorMODISTerra_0 = ol.extent.getWidth(projectionExtent_CorrectedReflectanceTrueColorMODISTerra_0) / 256;
    var resolutions_CorrectedReflectanceTrueColorMODISTerra_0 = new Array(14);
    var matrixIds_CorrectedReflectanceTrueColorMODISTerra_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_CorrectedReflectanceTrueColorMODISTerra_0[z] = size_CorrectedReflectanceTrueColorMODISTerra_0 / Math.pow(2, z);
        matrixIds_CorrectedReflectanceTrueColorMODISTerra_0[z] = z;
    }
    var lyr_CorrectedReflectanceTrueColorMODISTerra_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
                                attributions: ' ',
                                "layer": "MODIS_Terra_CorrectedReflectance_TrueColor",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_CorrectedReflectanceTrueColorMODISTerra_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_CorrectedReflectanceTrueColorMODISTerra_0),
                resolutions: resolutions_CorrectedReflectanceTrueColorMODISTerra_0,
                matrixIds: matrixIds_CorrectedReflectanceTrueColorMODISTerra_0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Corrected Reflectance (True Color, MODIS, Terra)',
                            opacity: 1.0,
                            
                            
                          });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

    var projection_DayNightBandVIIRSNOAA20_2 = ol.proj.get('EPSG:3857');
    var projectionExtent_DayNightBandVIIRSNOAA20_2 = projection_DayNightBandVIIRSNOAA20_2.getExtent();
    var size_DayNightBandVIIRSNOAA20_2 = ol.extent.getWidth(projectionExtent_DayNightBandVIIRSNOAA20_2) / 256;
    var resolutions_DayNightBandVIIRSNOAA20_2 = new Array(14);
    var matrixIds_DayNightBandVIIRSNOAA20_2 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_DayNightBandVIIRSNOAA20_2[z] = size_DayNightBandVIIRSNOAA20_2 / Math.pow(2, z);
        matrixIds_DayNightBandVIIRSNOAA20_2[z] = z;
    }
    var lyr_DayNightBandVIIRSNOAA20_2 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_Black_Marble/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.png",
                                attributions: ' ',
                                "layer": "VIIRS_NOAA20_DayNightBand",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_DayNightBandVIIRSNOAA20_2,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_DayNightBandVIIRSNOAA20_2),
                resolutions: resolutions_DayNightBandVIIRSNOAA20_2,
                matrixIds: matrixIds_DayNightBandVIIRSNOAA20_2
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Day/Night Band (VIIRS, NOAA-20)',
                            opacity: 1.0,
                            
                            
                          });

    var projection_SurfaceAirTemperatureL2DayAIRSAqua_3 = ol.proj.get('EPSG:3857');
    var projectionExtent_SurfaceAirTemperatureL2DayAIRSAqua_3 = projection_SurfaceAirTemperatureL2DayAIRSAqua_3.getExtent();
    var size_SurfaceAirTemperatureL2DayAIRSAqua_3 = ol.extent.getWidth(projectionExtent_SurfaceAirTemperatureL2DayAIRSAqua_3) / 256;
    var resolutions_SurfaceAirTemperatureL2DayAIRSAqua_3 = new Array(14);
    var matrixIds_SurfaceAirTemperatureL2DayAIRSAqua_3 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_SurfaceAirTemperatureL2DayAIRSAqua_3[z] = size_SurfaceAirTemperatureL2DayAIRSAqua_3 / Math.pow(2, z);
        matrixIds_SurfaceAirTemperatureL2DayAIRSAqua_3[z] = z;
    }
    var lyr_SurfaceAirTemperatureL2DayAIRSAqua_3 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
                                attributions: ' ',
                                "layer": "AIRS_L2_Surface_Air_Temperature_Day",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_SurfaceAirTemperatureL2DayAIRSAqua_3,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_SurfaceAirTemperatureL2DayAIRSAqua_3),
                resolutions: resolutions_SurfaceAirTemperatureL2DayAIRSAqua_3,
                matrixIds: matrixIds_SurfaceAirTemperatureL2DayAIRSAqua_3
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Surface Air Temperature (L2, Day, AIRS, Aqua)',
                            opacity: 1.0,
                            
                            
                          });

    var projection_SurfaceAirTemperatureL2NightAIRSAqua_4 = ol.proj.get('EPSG:3857');
    var projectionExtent_SurfaceAirTemperatureL2NightAIRSAqua_4 = projection_SurfaceAirTemperatureL2NightAIRSAqua_4.getExtent();
    var size_SurfaceAirTemperatureL2NightAIRSAqua_4 = ol.extent.getWidth(projectionExtent_SurfaceAirTemperatureL2NightAIRSAqua_4) / 256;
    var resolutions_SurfaceAirTemperatureL2NightAIRSAqua_4 = new Array(14);
    var matrixIds_SurfaceAirTemperatureL2NightAIRSAqua_4 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_SurfaceAirTemperatureL2NightAIRSAqua_4[z] = size_SurfaceAirTemperatureL2NightAIRSAqua_4 / Math.pow(2, z);
        matrixIds_SurfaceAirTemperatureL2NightAIRSAqua_4[z] = z;
    }
    var lyr_SurfaceAirTemperatureL2NightAIRSAqua_4 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
                                attributions: ' ',
                                "layer": "AIRS_L2_Surface_Air_Temperature_Night",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_SurfaceAirTemperatureL2NightAIRSAqua_4,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_SurfaceAirTemperatureL2NightAIRSAqua_4),
                resolutions: resolutions_SurfaceAirTemperatureL2NightAIRSAqua_4,
                matrixIds: matrixIds_SurfaceAirTemperatureL2NightAIRSAqua_4
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Surface Air Temperature (L2, Night, AIRS, Aqua)',
                            opacity: 1.0,
                            
                            
                          });

    var projection_ClearSkyOutgoingLongwaveRadiationL3DaytimeAscendingDailyAIRSAMSUAqua_5 = ol.proj.get('EPSG:3857');
    var projectionExtent_ClearSkyOutgoingLongwaveRadiationL3DaytimeAscendingDailyAIRSAMSUAqua_5 = projection_ClearSkyOutgoingLongwaveRadiationL3DaytimeAscendingDailyAIRSAMSUAqua_5.getExtent();
    var size_ClearSkyOutgoingLongwaveRadiationL3DaytimeAscendingDailyAIRSAMSUAqua_5 = ol.extent.getWidth(projectionExtent_ClearSkyOutgoingLongwaveRadiationL3DaytimeAscendingDailyAIRSAMSUAqua_5) / 256;
    var resolutions_ClearSkyOutgoingLongwaveRadiationL3DaytimeAscendingDailyAIRSAMSUAqua_5 = new Array(14);
    var matrixIds_ClearSkyOutgoingLongwaveRadiationL3DaytimeAscendingDailyAIRSAMSUAqua_5 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_ClearSkyOutgoingLongwaveRadiationL3DaytimeAscendingDailyAIRSAMSUAqua_5[z] = size_ClearSkyOutgoingLongwaveRadiationL3DaytimeAscendingDailyAIRSAMSUAqua_5 / Math.pow(2, z);
        matrixIds_ClearSkyOutgoingLongwaveRadiationL3DaytimeAscendingDailyAIRSAMSUAqua_5[z] = z;
    }
    var lyr_ClearSkyOutgoingLongwaveRadiationL3DaytimeAscendingDailyAIRSAMSUAqua_5 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_Black_Marble/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.png",
                                attributions: ' ',
                                "layer": "AIRS_L3_Clear_Sky_Outgoing_Longwave_Radiation_Daily_Day",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_ClearSkyOutgoingLongwaveRadiationL3DaytimeAscendingDailyAIRSAMSUAqua_5,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_ClearSkyOutgoingLongwaveRadiationL3DaytimeAscendingDailyAIRSAMSUAqua_5),
                resolutions: resolutions_ClearSkyOutgoingLongwaveRadiationL3DaytimeAscendingDailyAIRSAMSUAqua_5,
                matrixIds: matrixIds_ClearSkyOutgoingLongwaveRadiationL3DaytimeAscendingDailyAIRSAMSUAqua_5
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Clear Sky Outgoing Longwave Radiation (L3, Daytime/Ascending, Daily, AIRS+AMSU, Aqua) ',
                            opacity: 1.0,
                            
                            
                          });

    var projection_ClearSkyOutgoingLongwaveRadiationL3NighttimeDescendingDailyAIRSAMSUAqua_6 = ol.proj.get('EPSG:3857');
    var projectionExtent_ClearSkyOutgoingLongwaveRadiationL3NighttimeDescendingDailyAIRSAMSUAqua_6 = projection_ClearSkyOutgoingLongwaveRadiationL3NighttimeDescendingDailyAIRSAMSUAqua_6.getExtent();
    var size_ClearSkyOutgoingLongwaveRadiationL3NighttimeDescendingDailyAIRSAMSUAqua_6 = ol.extent.getWidth(projectionExtent_ClearSkyOutgoingLongwaveRadiationL3NighttimeDescendingDailyAIRSAMSUAqua_6) / 256;
    var resolutions_ClearSkyOutgoingLongwaveRadiationL3NighttimeDescendingDailyAIRSAMSUAqua_6 = new Array(14);
    var matrixIds_ClearSkyOutgoingLongwaveRadiationL3NighttimeDescendingDailyAIRSAMSUAqua_6 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_ClearSkyOutgoingLongwaveRadiationL3NighttimeDescendingDailyAIRSAMSUAqua_6[z] = size_ClearSkyOutgoingLongwaveRadiationL3NighttimeDescendingDailyAIRSAMSUAqua_6 / Math.pow(2, z);
        matrixIds_ClearSkyOutgoingLongwaveRadiationL3NighttimeDescendingDailyAIRSAMSUAqua_6[z] = z;
    }
    var lyr_ClearSkyOutgoingLongwaveRadiationL3NighttimeDescendingDailyAIRSAMSUAqua_6 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_Black_Marble/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.png",
                                attributions: ' ',
                                "layer": "AIRS_L3_Clear_Sky_Outgoing_Longwave_Radiation_Daily_Night",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_ClearSkyOutgoingLongwaveRadiationL3NighttimeDescendingDailyAIRSAMSUAqua_6,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_ClearSkyOutgoingLongwaveRadiationL3NighttimeDescendingDailyAIRSAMSUAqua_6),
                resolutions: resolutions_ClearSkyOutgoingLongwaveRadiationL3NighttimeDescendingDailyAIRSAMSUAqua_6,
                matrixIds: matrixIds_ClearSkyOutgoingLongwaveRadiationL3NighttimeDescendingDailyAIRSAMSUAqua_6
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Clear Sky Outgoing Longwave Radiation (L3, Nighttime/Descending, Daily, AIRS+AMSU, Aqua) ',
                            opacity: 1.0,
                            
                            
                          });

    var projection_NitrogenDioxideL3VerticalColumnTroposphereSubdailyTEMPO_7 = ol.proj.get('EPSG:3857');
    var projectionExtent_NitrogenDioxideL3VerticalColumnTroposphereSubdailyTEMPO_7 = projection_NitrogenDioxideL3VerticalColumnTroposphereSubdailyTEMPO_7.getExtent();
    var size_NitrogenDioxideL3VerticalColumnTroposphereSubdailyTEMPO_7 = ol.extent.getWidth(projectionExtent_NitrogenDioxideL3VerticalColumnTroposphereSubdailyTEMPO_7) / 256;
    var resolutions_NitrogenDioxideL3VerticalColumnTroposphereSubdailyTEMPO_7 = new Array(14);
    var matrixIds_NitrogenDioxideL3VerticalColumnTroposphereSubdailyTEMPO_7 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_NitrogenDioxideL3VerticalColumnTroposphereSubdailyTEMPO_7[z] = size_NitrogenDioxideL3VerticalColumnTroposphereSubdailyTEMPO_7 / Math.pow(2, z);
        matrixIds_NitrogenDioxideL3VerticalColumnTroposphereSubdailyTEMPO_7[z] = z;
    }
    var lyr_NitrogenDioxideL3VerticalColumnTroposphereSubdailyTEMPO_7 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
                                attributions: ' ',
                                "layer": "TEMPO_L3_NO2_Vertical_Column_Troposphere",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_NitrogenDioxideL3VerticalColumnTroposphereSubdailyTEMPO_7,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_NitrogenDioxideL3VerticalColumnTroposphereSubdailyTEMPO_7),
                resolutions: resolutions_NitrogenDioxideL3VerticalColumnTroposphereSubdailyTEMPO_7,
                matrixIds: matrixIds_NitrogenDioxideL3VerticalColumnTroposphereSubdailyTEMPO_7
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Nitrogen Dioxide (L3, Vertical Column Troposphere, Subdaily, TEMPO)',
                            opacity: 1.0,
                            
                            
                          });

    var projection_FormaldehydeL3VerticalColumnSubdailyTEMPO_8 = ol.proj.get('EPSG:3857');
    var projectionExtent_FormaldehydeL3VerticalColumnSubdailyTEMPO_8 = projection_FormaldehydeL3VerticalColumnSubdailyTEMPO_8.getExtent();
    var size_FormaldehydeL3VerticalColumnSubdailyTEMPO_8 = ol.extent.getWidth(projectionExtent_FormaldehydeL3VerticalColumnSubdailyTEMPO_8) / 256;
    var resolutions_FormaldehydeL3VerticalColumnSubdailyTEMPO_8 = new Array(14);
    var matrixIds_FormaldehydeL3VerticalColumnSubdailyTEMPO_8 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_FormaldehydeL3VerticalColumnSubdailyTEMPO_8[z] = size_FormaldehydeL3VerticalColumnSubdailyTEMPO_8 / Math.pow(2, z);
        matrixIds_FormaldehydeL3VerticalColumnSubdailyTEMPO_8[z] = z;
    }
    var lyr_FormaldehydeL3VerticalColumnSubdailyTEMPO_8 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
                                attributions: ' ',
                                "layer": "TEMPO_L3_Formaldehyde_Vertical_Column",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_FormaldehydeL3VerticalColumnSubdailyTEMPO_8,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_FormaldehydeL3VerticalColumnSubdailyTEMPO_8),
                resolutions: resolutions_FormaldehydeL3VerticalColumnSubdailyTEMPO_8,
                matrixIds: matrixIds_FormaldehydeL3VerticalColumnSubdailyTEMPO_8
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Formaldehyde (L3, Vertical Column, Subdaily, TEMPO)',
                            opacity: 1.0,
                            
                            
                          });

    var projection_OzoneProfileL3TroposphereColumnSubdailyTEMPO_9 = ol.proj.get('EPSG:3857');
    var projectionExtent_OzoneProfileL3TroposphereColumnSubdailyTEMPO_9 = projection_OzoneProfileL3TroposphereColumnSubdailyTEMPO_9.getExtent();
    var size_OzoneProfileL3TroposphereColumnSubdailyTEMPO_9 = ol.extent.getWidth(projectionExtent_OzoneProfileL3TroposphereColumnSubdailyTEMPO_9) / 256;
    var resolutions_OzoneProfileL3TroposphereColumnSubdailyTEMPO_9 = new Array(14);
    var matrixIds_OzoneProfileL3TroposphereColumnSubdailyTEMPO_9 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_OzoneProfileL3TroposphereColumnSubdailyTEMPO_9[z] = size_OzoneProfileL3TroposphereColumnSubdailyTEMPO_9 / Math.pow(2, z);
        matrixIds_OzoneProfileL3TroposphereColumnSubdailyTEMPO_9[z] = z;
    }
    var lyr_OzoneProfileL3TroposphereColumnSubdailyTEMPO_9 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
                                attributions: ' ',
                                "layer": "TEMPO_L3_Ozone_Profile_Troposphere_Column",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_OzoneProfileL3TroposphereColumnSubdailyTEMPO_9,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_OzoneProfileL3TroposphereColumnSubdailyTEMPO_9),
                resolutions: resolutions_OzoneProfileL3TroposphereColumnSubdailyTEMPO_9,
                matrixIds: matrixIds_OzoneProfileL3TroposphereColumnSubdailyTEMPO_9
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Ozone Profile (L3, Troposphere Column, Subdaily, TEMPO)',
                            opacity: 1.0,
                            
                            
                          });

    var projection_CloudsL3CloudPressureTotalSubdailyTEMPO_10 = ol.proj.get('EPSG:3857');
    var projectionExtent_CloudsL3CloudPressureTotalSubdailyTEMPO_10 = projection_CloudsL3CloudPressureTotalSubdailyTEMPO_10.getExtent();
    var size_CloudsL3CloudPressureTotalSubdailyTEMPO_10 = ol.extent.getWidth(projectionExtent_CloudsL3CloudPressureTotalSubdailyTEMPO_10) / 256;
    var resolutions_CloudsL3CloudPressureTotalSubdailyTEMPO_10 = new Array(14);
    var matrixIds_CloudsL3CloudPressureTotalSubdailyTEMPO_10 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_CloudsL3CloudPressureTotalSubdailyTEMPO_10[z] = size_CloudsL3CloudPressureTotalSubdailyTEMPO_10 / Math.pow(2, z);
        matrixIds_CloudsL3CloudPressureTotalSubdailyTEMPO_10[z] = z;
    }
    var lyr_CloudsL3CloudPressureTotalSubdailyTEMPO_10 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
                                attributions: ' ',
                                "layer": "TEMPO_L3_Cloud_Cloud_Pressure_Total",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_CloudsL3CloudPressureTotalSubdailyTEMPO_10,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_CloudsL3CloudPressureTotalSubdailyTEMPO_10),
                resolutions: resolutions_CloudsL3CloudPressureTotalSubdailyTEMPO_10,
                matrixIds: matrixIds_CloudsL3CloudPressureTotalSubdailyTEMPO_10
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Clouds (L3, Cloud Pressure Total, Subdaily, TEMPO)',
                            opacity: 1.0,
                            
                            
                          });

    var projection_CarbonMonoxideL2500hPaDayAIRSAqua_11 = ol.proj.get('EPSG:3857');
    var projectionExtent_CarbonMonoxideL2500hPaDayAIRSAqua_11 = projection_CarbonMonoxideL2500hPaDayAIRSAqua_11.getExtent();
    var size_CarbonMonoxideL2500hPaDayAIRSAqua_11 = ol.extent.getWidth(projectionExtent_CarbonMonoxideL2500hPaDayAIRSAqua_11) / 256;
    var resolutions_CarbonMonoxideL2500hPaDayAIRSAqua_11 = new Array(14);
    var matrixIds_CarbonMonoxideL2500hPaDayAIRSAqua_11 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_CarbonMonoxideL2500hPaDayAIRSAqua_11[z] = size_CarbonMonoxideL2500hPaDayAIRSAqua_11 / Math.pow(2, z);
        matrixIds_CarbonMonoxideL2500hPaDayAIRSAqua_11[z] = z;
    }
    var lyr_CarbonMonoxideL2500hPaDayAIRSAqua_11 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
                                attributions: ' ',
                                "layer": "AIRS_L2_Carbon_Monoxide_500hPa_Volume_Mixing_Ratio_Day",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_CarbonMonoxideL2500hPaDayAIRSAqua_11,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_CarbonMonoxideL2500hPaDayAIRSAqua_11),
                resolutions: resolutions_CarbonMonoxideL2500hPaDayAIRSAqua_11,
                matrixIds: matrixIds_CarbonMonoxideL2500hPaDayAIRSAqua_11
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Carbon Monoxide (L2, 500hPa, Day, AIRS, Aqua)',
                            opacity: 1.0,
                            
                            
                          });

    var projection_CarbonMonoxideL2500hPaNightAIRSAqua_12 = ol.proj.get('EPSG:3857');
    var projectionExtent_CarbonMonoxideL2500hPaNightAIRSAqua_12 = projection_CarbonMonoxideL2500hPaNightAIRSAqua_12.getExtent();
    var size_CarbonMonoxideL2500hPaNightAIRSAqua_12 = ol.extent.getWidth(projectionExtent_CarbonMonoxideL2500hPaNightAIRSAqua_12) / 256;
    var resolutions_CarbonMonoxideL2500hPaNightAIRSAqua_12 = new Array(14);
    var matrixIds_CarbonMonoxideL2500hPaNightAIRSAqua_12 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_CarbonMonoxideL2500hPaNightAIRSAqua_12[z] = size_CarbonMonoxideL2500hPaNightAIRSAqua_12 / Math.pow(2, z);
        matrixIds_CarbonMonoxideL2500hPaNightAIRSAqua_12[z] = z;
    }
    var lyr_CarbonMonoxideL2500hPaNightAIRSAqua_12 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
                                attributions: ' ',
                                "layer": "AIRS_L2_Carbon_Monoxide_500hPa_Volume_Mixing_Ratio_Night",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_CarbonMonoxideL2500hPaNightAIRSAqua_12,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_CarbonMonoxideL2500hPaNightAIRSAqua_12),
                resolutions: resolutions_CarbonMonoxideL2500hPaNightAIRSAqua_12,
                matrixIds: matrixIds_CarbonMonoxideL2500hPaNightAIRSAqua_12
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Carbon Monoxide (L2, 500hPa, Night, AIRS, Aqua)',
                            opacity: 1.0,
                            
                            
                          });

    var projection_MethaneL2400hPaDayAIRSAqua_13 = ol.proj.get('EPSG:3857');
    var projectionExtent_MethaneL2400hPaDayAIRSAqua_13 = projection_MethaneL2400hPaDayAIRSAqua_13.getExtent();
    var size_MethaneL2400hPaDayAIRSAqua_13 = ol.extent.getWidth(projectionExtent_MethaneL2400hPaDayAIRSAqua_13) / 256;
    var resolutions_MethaneL2400hPaDayAIRSAqua_13 = new Array(14);
    var matrixIds_MethaneL2400hPaDayAIRSAqua_13 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_MethaneL2400hPaDayAIRSAqua_13[z] = size_MethaneL2400hPaDayAIRSAqua_13 / Math.pow(2, z);
        matrixIds_MethaneL2400hPaDayAIRSAqua_13[z] = z;
    }
    var lyr_MethaneL2400hPaDayAIRSAqua_13 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
                                attributions: ' ',
                                "layer": "AIRS_L2_Methane_400hPa_Volume_Mixing_Ratio_Day",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_MethaneL2400hPaDayAIRSAqua_13,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_MethaneL2400hPaDayAIRSAqua_13),
                resolutions: resolutions_MethaneL2400hPaDayAIRSAqua_13,
                matrixIds: matrixIds_MethaneL2400hPaDayAIRSAqua_13
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Methane (L2, 400 hPa, Day, AIRS, Aqua)',
                            opacity: 1.0,
                            
                            
                          });

    var projection_MethaneL2400hPaNightAIRSAqua_14 = ol.proj.get('EPSG:3857');
    var projectionExtent_MethaneL2400hPaNightAIRSAqua_14 = projection_MethaneL2400hPaNightAIRSAqua_14.getExtent();
    var size_MethaneL2400hPaNightAIRSAqua_14 = ol.extent.getWidth(projectionExtent_MethaneL2400hPaNightAIRSAqua_14) / 256;
    var resolutions_MethaneL2400hPaNightAIRSAqua_14 = new Array(14);
    var matrixIds_MethaneL2400hPaNightAIRSAqua_14 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_MethaneL2400hPaNightAIRSAqua_14[z] = size_MethaneL2400hPaNightAIRSAqua_14 / Math.pow(2, z);
        matrixIds_MethaneL2400hPaNightAIRSAqua_14[z] = z;
    }
    var lyr_MethaneL2400hPaNightAIRSAqua_14 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
                                attributions: ' ',
                                "layer": "AIRS_L2_Methane_400hPa_Volume_Mixing_Ratio_Night",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_MethaneL2400hPaNightAIRSAqua_14,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_MethaneL2400hPaNightAIRSAqua_14),
                resolutions: resolutions_MethaneL2400hPaNightAIRSAqua_14,
                matrixIds: matrixIds_MethaneL2400hPaNightAIRSAqua_14
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Methane (L2, 400 hPa, Night, AIRS, Aqua)',
                            opacity: 1.0,
                            
                            
                          });

    var projection_CarbonDioxideTotalColumnAverageOCO3_15 = ol.proj.get('EPSG:3857');
    var projectionExtent_CarbonDioxideTotalColumnAverageOCO3_15 = projection_CarbonDioxideTotalColumnAverageOCO3_15.getExtent();
    var size_CarbonDioxideTotalColumnAverageOCO3_15 = ol.extent.getWidth(projectionExtent_CarbonDioxideTotalColumnAverageOCO3_15) / 256;
    var resolutions_CarbonDioxideTotalColumnAverageOCO3_15 = new Array(14);
    var matrixIds_CarbonDioxideTotalColumnAverageOCO3_15 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_CarbonDioxideTotalColumnAverageOCO3_15[z] = size_CarbonDioxideTotalColumnAverageOCO3_15 / Math.pow(2, z);
        matrixIds_CarbonDioxideTotalColumnAverageOCO3_15[z] = z;
    }
    var lyr_CarbonDioxideTotalColumnAverageOCO3_15 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
                                attributions: ' ',
                                "layer": "OCO-3_Carbon_Dioxide_Total_Column_Average",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_CarbonDioxideTotalColumnAverageOCO3_15,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_CarbonDioxideTotalColumnAverageOCO3_15),
                resolutions: resolutions_CarbonDioxideTotalColumnAverageOCO3_15,
                matrixIds: matrixIds_CarbonDioxideTotalColumnAverageOCO3_15
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Carbon Dioxide (Total Column Average, OCO-3)',
                            opacity: 1.0,
                            
                            
                          });

    var projection_SulfurDioxideTotalVerticalColumnL2TROPOMISentinel5P_16 = ol.proj.get('EPSG:3857');
    var projectionExtent_SulfurDioxideTotalVerticalColumnL2TROPOMISentinel5P_16 = projection_SulfurDioxideTotalVerticalColumnL2TROPOMISentinel5P_16.getExtent();
    var size_SulfurDioxideTotalVerticalColumnL2TROPOMISentinel5P_16 = ol.extent.getWidth(projectionExtent_SulfurDioxideTotalVerticalColumnL2TROPOMISentinel5P_16) / 256;
    var resolutions_SulfurDioxideTotalVerticalColumnL2TROPOMISentinel5P_16 = new Array(14);
    var matrixIds_SulfurDioxideTotalVerticalColumnL2TROPOMISentinel5P_16 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_SulfurDioxideTotalVerticalColumnL2TROPOMISentinel5P_16[z] = size_SulfurDioxideTotalVerticalColumnL2TROPOMISentinel5P_16 / Math.pow(2, z);
        matrixIds_SulfurDioxideTotalVerticalColumnL2TROPOMISentinel5P_16[z] = z;
    }
    var lyr_SulfurDioxideTotalVerticalColumnL2TROPOMISentinel5P_16 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
                                attributions: ' ',
                                "layer": "TROPOMI_L2_Sulfur_Dioxide_Total_Vertical_Column_Daily",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_SulfurDioxideTotalVerticalColumnL2TROPOMISentinel5P_16,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_SulfurDioxideTotalVerticalColumnL2TROPOMISentinel5P_16),
                resolutions: resolutions_SulfurDioxideTotalVerticalColumnL2TROPOMISentinel5P_16,
                matrixIds: matrixIds_SulfurDioxideTotalVerticalColumnL2TROPOMISentinel5P_16
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Sulfur Dioxide (Total Vertical Column, L2, TROPOMI, Sentinel-5P)',
                            opacity: 1.0,
                            
                            
                          });

    var projection_OceanWindSpeedL3DailyAMSRU2GCOMW1_17 = ol.proj.get('EPSG:3857');
    var projectionExtent_OceanWindSpeedL3DailyAMSRU2GCOMW1_17 = projection_OceanWindSpeedL3DailyAMSRU2GCOMW1_17.getExtent();
    var size_OceanWindSpeedL3DailyAMSRU2GCOMW1_17 = ol.extent.getWidth(projectionExtent_OceanWindSpeedL3DailyAMSRU2GCOMW1_17) / 256;
    var resolutions_OceanWindSpeedL3DailyAMSRU2GCOMW1_17 = new Array(14);
    var matrixIds_OceanWindSpeedL3DailyAMSRU2GCOMW1_17 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_OceanWindSpeedL3DailyAMSRU2GCOMW1_17[z] = size_OceanWindSpeedL3DailyAMSRU2GCOMW1_17 / Math.pow(2, z);
        matrixIds_OceanWindSpeedL3DailyAMSRU2GCOMW1_17[z] = z;
    }
    var lyr_OceanWindSpeedL3DailyAMSRU2GCOMW1_17 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
                                attributions: ' ',
                                "layer": "AMSRU2_L3_Ocean_Wind_Speed_Daily",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_OceanWindSpeedL3DailyAMSRU2GCOMW1_17,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_OceanWindSpeedL3DailyAMSRU2GCOMW1_17),
                resolutions: resolutions_OceanWindSpeedL3DailyAMSRU2GCOMW1_17,
                matrixIds: matrixIds_OceanWindSpeedL3DailyAMSRU2GCOMW1_17
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Ocean Wind Speed ( L3, Daily, AMSRU2, GCOM-W1)',
                            opacity: 1.0,
                            
                            
                          });

    var projection_TotalPrecpitableWaterL3DailyAMSRU2GCOMW1_18 = ol.proj.get('EPSG:3857');
    var projectionExtent_TotalPrecpitableWaterL3DailyAMSRU2GCOMW1_18 = projection_TotalPrecpitableWaterL3DailyAMSRU2GCOMW1_18.getExtent();
    var size_TotalPrecpitableWaterL3DailyAMSRU2GCOMW1_18 = ol.extent.getWidth(projectionExtent_TotalPrecpitableWaterL3DailyAMSRU2GCOMW1_18) / 256;
    var resolutions_TotalPrecpitableWaterL3DailyAMSRU2GCOMW1_18 = new Array(14);
    var matrixIds_TotalPrecpitableWaterL3DailyAMSRU2GCOMW1_18 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_TotalPrecpitableWaterL3DailyAMSRU2GCOMW1_18[z] = size_TotalPrecpitableWaterL3DailyAMSRU2GCOMW1_18 / Math.pow(2, z);
        matrixIds_TotalPrecpitableWaterL3DailyAMSRU2GCOMW1_18[z] = z;
    }
    var lyr_TotalPrecpitableWaterL3DailyAMSRU2GCOMW1_18 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
                                attributions: ' ',
                                "layer": "AMSRU2_L3_Total_Precipitable_Water_Daily",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_TotalPrecpitableWaterL3DailyAMSRU2GCOMW1_18,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_TotalPrecpitableWaterL3DailyAMSRU2GCOMW1_18),
                resolutions: resolutions_TotalPrecpitableWaterL3DailyAMSRU2GCOMW1_18,
                matrixIds: matrixIds_TotalPrecpitableWaterL3DailyAMSRU2GCOMW1_18
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Total Precpitable Water ( L3, Daily, AMSRU2, GCOM-W1)',
                            opacity: 1.0,
                            
                            
                          });

    var projection_SeaSurfaceTemperatureAnomaliesL4MURGHRSST_19 = ol.proj.get('EPSG:3857');
    var projectionExtent_SeaSurfaceTemperatureAnomaliesL4MURGHRSST_19 = projection_SeaSurfaceTemperatureAnomaliesL4MURGHRSST_19.getExtent();
    var size_SeaSurfaceTemperatureAnomaliesL4MURGHRSST_19 = ol.extent.getWidth(projectionExtent_SeaSurfaceTemperatureAnomaliesL4MURGHRSST_19) / 256;
    var resolutions_SeaSurfaceTemperatureAnomaliesL4MURGHRSST_19 = new Array(14);
    var matrixIds_SeaSurfaceTemperatureAnomaliesL4MURGHRSST_19 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_SeaSurfaceTemperatureAnomaliesL4MURGHRSST_19[z] = size_SeaSurfaceTemperatureAnomaliesL4MURGHRSST_19 / Math.pow(2, z);
        matrixIds_SeaSurfaceTemperatureAnomaliesL4MURGHRSST_19[z] = z;
    }
    var lyr_SeaSurfaceTemperatureAnomaliesL4MURGHRSST_19 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
                                attributions: ' ',
                                "layer": "GHRSST_L4_MUR_Sea_Surface_Temperature_Anomalies",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_SeaSurfaceTemperatureAnomaliesL4MURGHRSST_19,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_SeaSurfaceTemperatureAnomaliesL4MURGHRSST_19),
                resolutions: resolutions_SeaSurfaceTemperatureAnomaliesL4MURGHRSST_19,
                matrixIds: matrixIds_SeaSurfaceTemperatureAnomaliesL4MURGHRSST_19
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Sea Surface Temperature Anomalies (L4,  MUR, GHRSST)',
                            opacity: 1.0,
                            
                            
                          });

    var projection_SeaSurfaceTemperatureL4MURGlobalFoundationGHRSST_20 = ol.proj.get('EPSG:3857');
    var projectionExtent_SeaSurfaceTemperatureL4MURGlobalFoundationGHRSST_20 = projection_SeaSurfaceTemperatureL4MURGlobalFoundationGHRSST_20.getExtent();
    var size_SeaSurfaceTemperatureL4MURGlobalFoundationGHRSST_20 = ol.extent.getWidth(projectionExtent_SeaSurfaceTemperatureL4MURGlobalFoundationGHRSST_20) / 256;
    var resolutions_SeaSurfaceTemperatureL4MURGlobalFoundationGHRSST_20 = new Array(14);
    var matrixIds_SeaSurfaceTemperatureL4MURGlobalFoundationGHRSST_20 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_SeaSurfaceTemperatureL4MURGlobalFoundationGHRSST_20[z] = size_SeaSurfaceTemperatureL4MURGlobalFoundationGHRSST_20 / Math.pow(2, z);
        matrixIds_SeaSurfaceTemperatureL4MURGlobalFoundationGHRSST_20[z] = z;
    }
    var lyr_SeaSurfaceTemperatureL4MURGlobalFoundationGHRSST_20 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
                                attributions: ' ',
                                "layer": "GHRSST_L4_MUR_Sea_Surface_Temperature",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_SeaSurfaceTemperatureL4MURGlobalFoundationGHRSST_20,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_SeaSurfaceTemperatureL4MURGlobalFoundationGHRSST_20),
                resolutions: resolutions_SeaSurfaceTemperatureL4MURGlobalFoundationGHRSST_20,
                matrixIds: matrixIds_SeaSurfaceTemperatureL4MURGlobalFoundationGHRSST_20
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Sea Surface Temperature (L4,  MUR Global Foundation, GHRSST)',
                            opacity: 1.0,
                            
                            
                          });

lyr_CorrectedReflectanceTrueColorMODISTerra_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_DayNightBandVIIRSNOAA20_2.setVisible(true);lyr_SurfaceAirTemperatureL2DayAIRSAqua_3.setVisible(true);lyr_SurfaceAirTemperatureL2NightAIRSAqua_4.setVisible(true);lyr_ClearSkyOutgoingLongwaveRadiationL3DaytimeAscendingDailyAIRSAMSUAqua_5.setVisible(true);lyr_ClearSkyOutgoingLongwaveRadiationL3NighttimeDescendingDailyAIRSAMSUAqua_6.setVisible(true);lyr_NitrogenDioxideL3VerticalColumnTroposphereSubdailyTEMPO_7.setVisible(true);lyr_FormaldehydeL3VerticalColumnSubdailyTEMPO_8.setVisible(true);lyr_OzoneProfileL3TroposphereColumnSubdailyTEMPO_9.setVisible(true);lyr_CloudsL3CloudPressureTotalSubdailyTEMPO_10.setVisible(true);lyr_CarbonMonoxideL2500hPaDayAIRSAqua_11.setVisible(true);lyr_CarbonMonoxideL2500hPaNightAIRSAqua_12.setVisible(true);lyr_MethaneL2400hPaDayAIRSAqua_13.setVisible(true);lyr_MethaneL2400hPaNightAIRSAqua_14.setVisible(true);lyr_CarbonDioxideTotalColumnAverageOCO3_15.setVisible(true);lyr_SulfurDioxideTotalVerticalColumnL2TROPOMISentinel5P_16.setVisible(true);lyr_OceanWindSpeedL3DailyAMSRU2GCOMW1_17.setVisible(true);lyr_TotalPrecpitableWaterL3DailyAMSRU2GCOMW1_18.setVisible(true);lyr_SeaSurfaceTemperatureAnomaliesL4MURGHRSST_19.setVisible(true);lyr_SeaSurfaceTemperatureL4MURGlobalFoundationGHRSST_20.setVisible(true);
var layersList = [lyr_CorrectedReflectanceTrueColorMODISTerra_0,lyr_OSMStandard_1,lyr_DayNightBandVIIRSNOAA20_2,lyr_SurfaceAirTemperatureL2DayAIRSAqua_3,lyr_SurfaceAirTemperatureL2NightAIRSAqua_4,lyr_ClearSkyOutgoingLongwaveRadiationL3DaytimeAscendingDailyAIRSAMSUAqua_5,lyr_ClearSkyOutgoingLongwaveRadiationL3NighttimeDescendingDailyAIRSAMSUAqua_6,lyr_NitrogenDioxideL3VerticalColumnTroposphereSubdailyTEMPO_7,lyr_FormaldehydeL3VerticalColumnSubdailyTEMPO_8,lyr_OzoneProfileL3TroposphereColumnSubdailyTEMPO_9,lyr_CloudsL3CloudPressureTotalSubdailyTEMPO_10,lyr_CarbonMonoxideL2500hPaDayAIRSAqua_11,lyr_CarbonMonoxideL2500hPaNightAIRSAqua_12,lyr_MethaneL2400hPaDayAIRSAqua_13,lyr_MethaneL2400hPaNightAIRSAqua_14,lyr_CarbonDioxideTotalColumnAverageOCO3_15,lyr_SulfurDioxideTotalVerticalColumnL2TROPOMISentinel5P_16,lyr_OceanWindSpeedL3DailyAMSRU2GCOMW1_17,lyr_TotalPrecpitableWaterL3DailyAMSRU2GCOMW1_18,lyr_SeaSurfaceTemperatureAnomaliesL4MURGHRSST_19,lyr_SeaSurfaceTemperatureL4MURGlobalFoundationGHRSST_20];

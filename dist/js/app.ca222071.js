(function(e){function t(t){for(var o,s,n=t[0],l=t[1],d=t[2],c=0,u=[];c<n.length;c++)s=n[c],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&u.push(i[s][0]),i[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);m&&m(t);while(u.length)u.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],o=!0,n=1;n<a.length;n++){var l=a[n];0!==i[l]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var o={},i={app:0},r=[];function s(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=o,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(a,o,function(t){return e[t]}.bind(null,o));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/webgis-performance/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var d=0;d<n.length;d++)t(n[d]);var m=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0d7c":function(e){e.exports=JSON.parse('[{"id":120,"type":"geojsonservice","layerType":"data","name":"Soil PygeoAPI Docker","geoJSONdata":[],"source":"https://soil-pygeoapi-docker-bozea3cspa-ew.a.run.app/collections/estsoil/items/","minZoom":2,"maxZoom":18,"zIndex":"4","visibility":false,"style":{"strokeColor":"#ff5252","strokeWidth":1,"fillColor":"rgb(255, 82, 82, 0.2)"}},{"id":110,"type":"vectortile","layerType":"data","name":"Estonia soil map","source":"https://storage.googleapis.com/www.maerchenland-rostock.de/vector-tiles/tiles/soil_map/{z}/{x}/{y}.pbf","minZoom":2,"maxZoom":18,"zIndex":"3","visibility":false,"style":{"strokeColor":"#448aff","strokeWidth":1,"fillColor":"rgb(68, 138, 255, 0.1)"}},{"id":130,"type":"wms","layerType":"data","name":"PRIA Põllumassiivid","url":"https://kls.pria.ee/geoserver/pria_avalik/ows","layer":"pria_avalik:pria_massiivid","format":"image/png","minZoom":12,"maxZoom":18,"zIndex":"2","visibility":false,"styleName":"default","attribution":"WMS: <a href=\'https://https://geoportaal.maaamet.ee/eng/\'>Estonian Landboard WMS</a>","crossOrigin":"anonymous","version":"1.3.1"},{"id":100,"type":"raster","layerType":"data","name":"EstSoil-EH soil texture classes","source":"https://storage.googleapis.com/www.maerchenland-rostock.de/tms-tiles/{z}/{x}/{y}.png","minZoom":8,"maxZoom":14,"zIndex":"1","visibility":false,"legend":[{"id":1,"soilIndex":"S","soilTitle":"Sand","soilColor":"#c40411"},{"id":2,"soilIndex":"LS","soilTitle":"Loamy Sand","soilColor":"#f48600"},{"id":3,"soilIndex":"SL","soilTitle":"Sandy Loam","soilColor":"#f3bb40"},{"id":4,"soilIndex":"L","soilTitle":"Loam","soilColor":"#fff74e"},{"id":5,"soilIndex":"SiL","soilTitle":"Silt Loam","soilColor":"#51d6b1"},{"id":6,"soilIndex":"SiCL","soilTitle":"Silty Clay Loam","soilColor":"#30afd2"},{"id":7,"soilIndex":"CL","soilTitle":"Clay Loam","soilColor":"#2b9ba2"},{"id":8,"soilIndex":"C","soilTitle":"Clay","soilColor":"#3b7be9"},{"id":9,"soilIndex":"HC","soilTitle":"Heavy Clay","soilColor":"#2b57ba"},{"id":10,"soilIndex":"PEAT","soilTitle":"Peatlands or highly organic soils","soilColor":"#704701"},{"id":11,"soilIndex":"GRAVELS","soilTitle":"Gravels or mainly rocky soils","soilColor":"#8ca4ad"},{"id":12,"soilIndex":"none","soilTitle":"no texture information","soilColor":"#ffffff"}],"attribution":"&copy; <a href=\'https://landscape-geoinformatics.ut.ee\'>Landscape Geoinformatics</a>"},{"id":90,"type":"wms","layerType":"base","name":"MA-ALUS: Halduspiirid","url":"https://kaart.maaamet.ee/wms/alus?","layer":"Halduspiirid","format":"image/png","projection":"EPSG:3301","minZoom":7,"maxZoom":18,"zIndex":"0","visibility":false,"styleName":"default","attribution":"WMS: <a href=\'https://https://geoportaal.maaamet.ee/eng/\'>Estonian Landboard WMS</a>","crossOrigin":"null","version":"1.1.1"},{"id":80,"type":"wms","layerType":"base","name":"MA-ALUS: Põhikaart","url":"https://kaart.maaamet.ee/wms/alus?","layer":"pohi_vr2","format":"image/png","projection":"EPSG:3301","minZoom":14,"maxZoom":18,"zIndex":"0","visibility":false,"styleName":"default","attribution":"WMS: <a href=\'https://https://geoportaal.maaamet.ee/eng/\'>Estonian Landboard WMS</a>","crossOrigin":"null","version":"1.1.1"},{"id":70,"type":"wms","layerType":"base","name":"MA-FOTOKAART: Reljeefvarjutus","url":"https://kaart.maaamet.ee/wms/fotokaart?","layer":"vreljeef","format":"image/jpeg","projection":"EPSG:3301","minZoom":7,"maxZoom":18,"zIndex":"0","visibility":false,"styleName":"default","attribution":"WMS: <a href=\'https://https://geoportaal.maaamet.ee/eng/\'>Estonian Landboard WMS</a>","crossOrigin":"null","version":"1.1.1"},{"id":60,"type":"wms","layerType":"base","name":"MA-FOTOKAART: Ortofoto","url":"https://kaart.maaamet.ee/wms/fotokaart?","layer":"EESTIFOTO","format":"image/jpeg","projection":"EPSG:3301","minZoom":7,"maxZoom":18,"zIndex":"0","visibility":false,"styleName":"default","attribution":"WMS: <a href=\'https://https://geoportaal.maaamet.ee/eng/\'>Estonian Landboard WMS</a>","crossOrigin":"null","version":"1.1.1"},{"id":50,"type":"raster","layerType":"base","name":"Open Street Map","source":"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png","minZoom":2,"maxZoom":18,"zIndex":"0","visibility":true,"attribution":"&copy; <a href=\'https://www.openstreetmap.org/copyright\'>OpenStreetMap</a> contributors"},{"id":40,"type":"raster","layerType":"base","name":"ESRI World Topo Map","source":"https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}.png","minZoom":2,"maxZoom":18,"zIndex":"0","visibility":false,"attribution":"Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"},{"id":30,"type":"raster","layerType":"base","name":"ESRI World Imagery","source":"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png","minZoom":2,"maxZoom":18,"zIndex":"0","visibility":false,"attribution":"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"},{"id":20,"type":"wms","layerType":"base","name":"Blue Marble by EOX","url":"https://tiles.maps.eox.at/wms?","layer":"bluemarble","format":"image/jpeg","projection":"EPSG:4326","minZoom":2,"maxZoom":10,"zIndex":"0","visibility":false,"styleName":"default","attribution":"<a href=\'https://s2maps.eu/\'>Sentinel-2 cloudless - https://s2maps.eu</a> by <a href=\'https://eox.at/\'>EOX IT Services GmbH</a> (Contains modified Copernicus Sentinel data 2019)","crossOrigin":"anonymous","version":"1.1.1"},{"id":10,"type":"wms","layerType":"base","name":"Sentinel-2 cloudless layer for 2019 by EOX","url":"https://tiles.maps.eox.at/wms?","layer":"s2cloudless-2019","format":"image/jpeg","projection":"EPSG:4326","minZoom":2,"maxZoom":14,"zIndex":"0","visibility":false,"styleName":"default","attribution":"<a href=\'https://s2maps.eu/\'>Sentinel-2 cloudless - https://s2maps.eu</a> by <a href=\'https://eox.at/\'>EOX IT Services GmbH</a> (Contains modified Copernicus Sentinel data 2019)","crossOrigin":"anonymous","version":"1.1.1"}]')},"220f":function(e,t,a){"use strict";var o=a("75c5"),i=a.n(o);i.a},"2cab":function(e,t,a){"use strict";var o=a("b636"),i=a.n(o);i.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),i=a("43f9"),r=a.n(i),s=a("1cf8"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("link",{attrs:{rel:"stylesheet",href:"//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons"}}),a("md-toolbar",[a("md-button",{staticClass:"md-icon-button",on:{click:function(t){e.menuVisible=!e.menuVisible}}},[a("md-icon",[e._v("menu")]),a("md-tooltip",{staticClass:"md-xsmall-hide md-small-hide",attrs:{"md-direction":"bottom"}},[e._v("Layers navigation")])],1),a("span",{staticClass:"md-title"},[e._v("Web GIS SPA")]),a("div",{staticClass:"md-toolbar-section-end"},[a("md-button",{staticClass:"md-icon-button md-raised md-primary button-margin",on:{click:function(t){return e.cleanMap()}}},[a("md-icon",[e._v("layers_clear")]),a("md-tooltip",{staticClass:"md-xsmall-hide md-small-hide",attrs:{"md-direction":"bottom"}},[e._v("Remove all layers")])],1)],1)],1),a("md-drawer",{attrs:{"md-active":e.menuVisible},on:{"update:mdActive":function(t){e.menuVisible=t},"update:md-active":function(t){e.menuVisible=t}}},[a("div",{staticClass:"manage"},[a("div",{staticClass:"layers-group"},[a("div",{staticClass:"md-layout md-alignment-center-center"},[a("div",{staticClass:"layers-title"},[a("md-icon",[e._v("layers")]),e._v(" Navigation")],1)])]),a("div",{staticClass:"drawer-layers-section"},[a("div",{staticClass:"md-layout md-alignment-top-right"},[a("div",{staticClass:"drawer-layers-section_subtitle"},[e._v("data layers")])]),e._l(e.sortedDataLayerListComputed,(function(t){return a("div",{key:t.id,staticClass:"drawer-layer"},[a("div",[a("md-checkbox",{staticClass:"md-primary",model:{value:t.visibility,callback:function(a){e.$set(t,"visibility",a)},expression:"layer.visibility"}},[e._v(e._s(t.name))])],1),t.visibility?a("div",{staticClass:"layer-info-region"},[a("div",{staticClass:"layer-info-text"},[e._v(" available at zoom: "+e._s(t.minZoom)+"-"+e._s(t.maxZoom)+" ")]),a("div",{staticClass:"layer-info-text_select"},[a("div",{staticClass:"mdl-selectfield"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.zIndex,expression:"layer.zIndex"}],staticClass:"browser-default",attrs:{name:"zIndex",id:"zIndex"},on:{change:function(a){var o=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(t,"zIndex",a.target.multiple?o:o[0])}}},e._l(e.sortedDataLayerListComputed.length,(function(t){return a("option",{key:t,domProps:{value:t}},[e._v(" z-index: "+e._s(t)+" ")])})),0)])]),t.legend?a("div",{staticClass:"layer-legend"},[a("table",{staticClass:"layer-legend__table"},e._l(t.legend,(function(t){return a("tr",{key:t.id},[a("td",[a("div",{staticClass:"layer-legend__table-color",style:{"background-color":t.soilColor}})]),a("td",[a("div",{staticClass:"layer-legend__table-index"},[e._v(" "+e._s(t.soilIndex)+" ")])]),a("td",[a("div",{staticClass:"layer-legend__table-title"},[e._v(" "+e._s(t.soilTitle)+" ")])])])})),0)]):e._e()]):e._e()])}))],2),a("div",{staticClass:"drawer-layers-section"},[a("div",{staticClass:"md-layout md-alignment-top-right"},[a("div",{staticClass:"drawer-layers-section_subtitle"},[e._v("base layers")])]),e._l(e.sortedBaseLayerListComputed,(function(t){return a("div",{key:t.id,staticClass:"drawer-layer"},[a("div",[a("md-radio",{staticClass:"md-primary",attrs:{value:t},model:{value:e.baseLayerSelected,callback:function(t){e.baseLayerSelected=t},expression:"baseLayerSelected"}},[e._v(e._s(t.name))])],1),t.id==e.baseLayerSelected.id?a("div",{staticClass:"layer-info-region"},[a("div",{staticClass:"layer-info-text"},[e._v(" available at zoom: "+e._s(t.minZoom)+"-"+e._s(t.maxZoom)+" ")]),t.legend?a("div",{staticClass:"layer-legend"},[a("table",{staticClass:"layer-legend__table"},e._l(t.legend,(function(t){return a("tr",{key:t.id},[a("td",[a("div",{staticClass:"layer-legend__table-color",style:{"background-color":t.soilColor}})]),a("td",[a("div",{staticClass:"layer-legend__table-index"},[e._v(" "+e._s(t.soilIndex)+" ")])]),a("td",[a("div",{staticClass:"layer-legend__table-title"},[e._v(" "+e._s(t.soilTitle)+" ")])])])})),0)]):e._e()]):e._e()])}))],2)])]),a("div",{staticClass:"container"},[a("Map",{attrs:{selectedLayersProp:e.activeLayerListComputed,mapZoomProp:e.mapZoomDefault,mapCenterProp:e.mapCenterDefault,zoomMinMaxProp:e.zoomsArray},on:{"update-zoom":function(t){e.mapZoomDefault=t},"update-minzoom":function(t){e.mapMinZoomDefault=t},"update-center":function(t){e.mapCenterDefault=t}}})],1)],1)},l=[],d=(a("4de4"),a("4160"),a("159b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"map-component"},[a("link",{attrs:{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons"}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.dataLoadingStatus,expression:"dataLoadingStatus"}],staticClass:"md-layout md-alignment-center-center"},[a("div",{staticClass:"md-layout-item md-size-100"},[a("div",{staticClass:"md-layout md-alignment-center-center loading-block"},[a("md-progress-spinner",{staticClass:"md-accent",attrs:{"md-diameter":100,"md-stroke":3,"md-mode":"indeterminate"}})],1)]),e._m(0)]),a("div",[a("md-dialog-alert",{attrs:{"md-active":e.geoJsonUrlAlert,"md-title":e.geoJSONserviceLayerComputed.name,"md-content":"click on map and wait until vector objects are loaded"},on:{"update:mdActive":function(t){e.geoJsonUrlAlert=t},"update:md-active":function(t){e.geoJsonUrlAlert=t}}})],1),a("transition",{attrs:{name:"fade"}},[e.dataLoadingStatus?e._e():a("div",[a("div",{staticClass:"map-info"},[a("transition-group",{attrs:{name:"fade"}},[this.geoJSONdata.length>0&&this.geoJSONserviceLayerComputed?a("div",{key:"table"},[a("md-table",[a("md-table-row",e._l(this.geoJSONdataSingleFeature.properties,(function(t,o){return a("md-table-head",{key:o},[e._v(e._s(o))])})),1),e._l(this.geoJSONdata,(function(t){return a("md-table-row",{key:t.id},e._l(t.properties,(function(t,o){return a("md-table-cell",{key:o},[e._v(e._s(t)+" ")])})),1)}))],2),a("div",{staticClass:"object-align-right"},[a("div",{staticClass:"object-item"},[a("md-button",{staticClass:"md-dense md-raised md-primary",on:{click:function(t){return e.fitSelectedJSONfeatures()}}},[a("md-icon",[e._v("filter_center_focus")]),e._v(" ZOOM "),a("md-tooltip",{attrs:{"md-direction":"bottom"}},[e._v("Zoom to selected features")])],1),a("md-button",{staticClass:"md-dense md-raised md-accent",on:{click:function(t){return e.resetGeoJSONdata()}}},[a("md-icon",[e._v("cancel")]),e._v(" REMOVE "),a("md-tooltip",{attrs:{"md-direction":"bottom"}},[e._v("Remove selected features")])],1)],1)])],1):e._e(),0===this.geoJSONdata.length&&this.geoJSONserviceLayerComputed&&1==this.clickOnMapDetection&&!0!==this.geoJSONdataSourceError?a("div",{key:"noobjects",staticClass:"md-layout md-alignment-top-center informer"},[a("div",{staticClass:"md-layout-item md-large-size-40 md-medium-size-40 md-small-size-100 md-xsmall-size-100"},[a("md-card",[a("md-card-header",[a("div",{staticClass:"md-title"},[e._v("Nothing found")])]),a("md-card-content",[e._v(" Unfortunately, no objects were found in that location, please try another one... ")]),a("md-card-actions",[a("md-button",{staticClass:"md-accent",on:{click:function(t){e.clickOnMapDetection=!1}}},[a("md-icon",[e._v("cancel")]),e._v(" CLOSE")],1)],1)],1)],1)]):e._e(),this.geoJSONdataSourceError?a("div",{key:"error",staticClass:"md-layout md-alignment-top-center informer"},[a("div",{staticClass:"md-layout-item md-large-size-40 md-medium-size-40 md-small-size-100 md-xsmall-size-100"},[a("md-card",[a("md-card-header",[a("div",{staticClass:"md-title"},[e._v("Source error")])]),a("md-card-content",[e._v(" "+e._s(e.geoJSONdataSourceErrorText)+" ")]),a("md-card-actions",[a("md-button",{staticClass:"md-accent",on:{click:function(t){e.geoJSONdataSourceError=!1}}},[a("md-icon",[e._v("cancel")]),e._v(" CLOSE")],1)],1)],1)],1)]):e._e()])],1)])]),a("div",{staticClass:"map-image"},[a("div",{staticClass:"map-informer"},[a("md-badge",{staticClass:"button-margin md-primary",attrs:{"md-content":e.zoomComputed}},[a("md-button",{staticClass:"md-raised md-icon-button",on:{click:function(t){return e.fitViewDefault()}}},[a("md-icon",[e._v("crop_free")]),a("md-tooltip",{staticClass:"md-xsmall-hide md-small-hide",attrs:{"md-direction":"bottom"}},[e._v("Current map zoom")])],1)],1)],1),a("vl-map",{attrs:{"data-projection":e.projComputed,"load-tiles-while-animating":!0,"load-tiles-while-interacting":!0},on:{click:function(t){return e.spatialQueryOnClick(t.coordinate)}}},[a("vl-view",{ref:"view",attrs:{zoom:e.zoomComputed,center:e.centerComputed,"min-zoom":e.minZoomComputed,"max-zoom":e.maxZoomComputed},on:{"update:zoom":[function(t){e.zoomComputed=t},function(t){return e.$emit("update-zoom",e.dataZoom)}],"update:center":[function(t){e.centerComputed=t},function(t){return e.$emit("update-center",e.dataCenter)}]}}),e._l(e.selectedLayersComputed,(function(t){return["geojsonurl"===t.type?a("vl-layer-vector",{key:t.id,attrs:{"z-index":parseInt(t.zIndex),"render-mode":"image"}},[a("vl-source-vector",{attrs:{url:t.source}}),a("vl-style-box",[a("vl-style-stroke",{attrs:{color:t.style.strokeColor,width:t.style.strokeWidth}}),a("vl-style-fill",{attrs:{color:t.style.fillColor}})],1)],1):e._e()]})),e.geoJSONserviceLayerComputed?a("vl-layer-vector",{attrs:{"z-index":parseInt(e.geoJSONserviceLayerComputed.zIndex),"render-mode":"image"}},[a("vl-source-vector",{ref:"geoJsonServicesSource",attrs:{features:e.geoJSONdata},on:{"update:features":function(t){e.geoJSONdata=t}}}),a("vl-style-box",[a("vl-style-stroke",{attrs:{color:e.geoJSONserviceLayerComputed.style.strokeColor,width:e.geoJSONserviceLayerComputed.style.strokeWidth}}),a("vl-style-fill",{attrs:{color:e.geoJSONserviceLayerComputed.style.fillColor}})],1)],1):e._e(),e._l(e.selectedLayersComputed,(function(t){return["vectortile"===t.type?a("vl-layer-vector-tile",{key:t.id,attrs:{"z-index":parseInt(t.zIndex)}},[a("vl-source-vector-tile",{attrs:{url:t.source}}),a("vl-style-box",[a("vl-style-stroke",{attrs:{color:t.style.strokeColor,width:t.style.strokeWidth}}),a("vl-style-fill",{attrs:{color:t.style.fillColor}})],1)],1):e._e()]})),e._l(e.selectedLayersComputed,(function(t){return["wmts"===t.type?a("vl-layer-tile",{key:t.id,attrs:{"z-index":parseInt(t.zIndex)}},[a("vl-source-wmts",{attrs:{attributions:t.attribution,url:t.url,"layer-name":t.layerName,"matrix-set":t.matrixSet,format:t.format,"style-name":t.styleName}})],1):e._e()]})),e._l(e.selectedLayersComputed,(function(t){return["wms"===t.type?a("vl-layer-tile",{key:t.id,attrs:{"z-index":parseInt(t.zIndex)}},[a("vl-source-wms",{attrs:{attributions:t.attribution,url:t.url,layers:t.layer,projection:t.projection,format:t.format,version:t.version,crossOrigin:t.crossOrigin}})],1):e._e()]})),e._l(e.selectedLayersComputed,(function(t){return["raster"===t.type?a("vl-layer-tile",{key:t.id,attrs:{"z-index":parseInt(t.zIndex)}},[a("vl-source-xyz",{attrs:{url:t.source,attributions:t.attribution}})],1):e._e()]}))],2)],1)],1)}),m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"md-layout-item md-size-100"},[a("div",{staticClass:"md-layout md-alignment-center-center loading-block"},[a("span",{staticClass:"md-display-1"},[e._v("Loading...")])])])}],c=(a("a9e3"),a("d3b7"),a("bc81")),u=a("a79f"),p=a("bc3a");u["a"].defs("EPSG:3301","+proj=lcc +lat_1=59.33333333333334 +lat_2=58 +lat_0=57.51755393055556 +lon_0=24 +x_0=500000 +y_0=6375000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"),Object(c["a"])(u["a"]);var y={name:"Map",props:{selectedLayersProp:Array,mapZoomProp:Number,mapCenterProp:Array,zoomMinMaxProp:Array},watch:{geoJSONserviceLayerComputed:function(e,t){e!==t&&!1!==e&&(this.geoJSONdata=[],this.geoJsonUrlAlert=!0,this.clickOnMapDetection=!1)}},data:function(){return{dataZoom:this.zoomComputed,dataCenter:this.centerComputed,dataCursorCoordinates:0,geoJSONdata:[],geoJSONdataSingleFeature:[],dataLoadingStatus:!1,clickOnMapDetection:!1,geoJsonUrlAlert:!1,geoJSONdataSourceError:!1,geoJSONdataSourceErrorText:""}},computed:{zoomComputed:{get:function(){return this.mapZoomProp},set:function(e){this.dataZoom=e}},centerComputed:{get:function(){return this.mapCenterProp},set:function(e){this.dataCenter=e}},projComputed:function(){return"EPSG:4326"},minZoomComputed:function(){return this.zoomMinMaxProp[0]},maxZoomComputed:function(){return this.zoomMinMaxProp[1]},selectedLayersComputed:function(){return this.selectedLayersProp},geoJSONserviceLayerComputed:function(){if(this.selectedLayersProp.length>0){var e=this.selectedLayersProp,t=e.filter((function(e){return"geojsonservice"===e.type}));return t.length>0&&t[0]}return!1}},methods:{spatialQueryOnClick:function(e){var t=this;if(this.geoJSONserviceLayerComputed){this.geoJSONdata=[],this.dataLoadingStatus=!0,this.dataCursorCoordinates=e;var a=e[0],o=e[1],i=a+","+o+","+a+","+o;setTimeout((function(){p.get(t.geoJSONserviceLayerComputed.source+"?bbox="+i+"&f=json").then((function(e){return t.geoJSONdata=e.data.features,t.geoJSONdataSingleFeature=e.data.features[0],t.clickOnMapDetection=!0})).catch((function(e){return t.geoJSONdataSourceError=!0,t.clickOnMapDetection=!1,t.geoJSONdataSourceErrorText=e})).finally((function(){return t.dataLoadingStatus=!1}))}),1e3)}},resetGeoJSONdata:function(){this.geoJSONdata=[],this.clickOnMapDetection=!1},fitSelectedJSONfeatures:function(){var e=this.$refs.geoJsonServicesSource.$source.getExtent();this.$refs.view.fit(e)},fitViewDefault:function(){this.$refs.view.fit([2335304.088168705,7825928.703949485,3161129.7417617496,8401958.149106573])}}},f=y,v=(a("220f"),a("2877")),g=Object(v["a"])(f,d,m,!1,null,"64e7aee4",null),b=g.exports,C=a("0d7c"),h={name:"App",components:{Map:b},data:function(){return{layersList:C,baseLayerSelected:{},mapZoomDefault:7,mapCenterDefault:[24.728699075440534,58.699046154309144],menuVisible:!1}},methods:{cleanMap:function(){var e=this.layersList;e.forEach((function(e){50!==e.id&&"data"===e.layerType&&(e.visibility=!1)}));var t=e.filter((function(e){return 50===e.id}));this.baseLayerSelected=t[0]},loadBaseLayer:function(){var e=this.layersList,t=e.filter((function(e){return 50===e.id}));this.baseLayerSelected=t[0]}},mounted:function(){this.loadBaseLayer()},computed:{zoomsArray:function(){if(this.activeLayerListComputed.length>0){var e=this.activeLayerListComputed,t=e.sort((function(e,t){if(e.minZoom<t.minZoom)return-1;if(e.minZoom>t.minZoom)return 1;if(e.minZoom==t.minZoom){if(e.maxZoom<t.maxZoom)return-1;if(e.maxZoom>t.maxZoom)return 1}return 0})),a=t[t.length-1],o=[a.minZoom,a.maxZoom];return o}return[2,18]},sortedLayerListComputed:function(){var e=this.layersList,t=e.sort((function(e,t){if(e.visibility<t.visibility)return 1;if(e.visibility>t.visibility)return-1;if(e.visibility==t.visibility){if(e.zIndex<t.zIndex)return 1;if(e.zIndex>t.zIndex)return-1}}));return t},sortedDataLayerListComputed:function(){var e=this.sortedLayerListComputed,t=e.filter((function(e){return"data"===e.layerType}));return t},sortedBaseLayerListComputed:function(){var e=this.layersList,t=e.filter((function(e){return"base"===e.layerType})),a=t.sort((function(e,t){return e.id<t.id?1:e.id>t.id?-1:void 0}));return a},activeLayerListComputed:function(){var e=this.sortedDataLayerListComputed,t=e.filter((function(e){return!0===e.visibility&&"data"===e.layerType}));return t.push(this.baseLayerSelected),t}}},S=h,_=(a("2cab"),Object(v["a"])(S,n,l,!1,null,"ae720184",null)),x=_.exports;a("51de"),a("e094"),a("2b69");o["default"].config.productionTip=!1,o["default"].use(r.a),o["default"].use(s["a"]),new o["default"]({render:function(e){return e(x)}}).$mount("#app")},"75c5":function(e,t,a){},b636:function(e,t,a){}});
//# sourceMappingURL=app.ca222071.js.map
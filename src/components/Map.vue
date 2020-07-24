<template>
<div>
  <div id="mapViewDiv"></div>
</div>


</template>
<script>
import {appconfig} from "../assets/config.js";
import Map from "esri/Map";
import FeatureLayer from "esri/layers/FeatureLayer";
import MapView from "esri/views/MapView";
import Home from "esri/widgets/Home";
import Zoom from "esri/widgets/Zoom";
import Compass from "esri/widgets/Compass";
import ScaleBar from "esri/widgets/ScaleBar";



export default {
  data() {
    return {mapView: null};
  },
  methods: {
    loadMap() {
            var map = new Map({
              basemap: "oceans"
            });

            var featureLayer = new FeatureLayer({
              url:
                "https://services3.arcgis.com/AIhXi099WVQHFHhq/arcgis/rest/services/Trails_2000_Database/FeatureServer/0",
              renderer: appconfig.renderer,
              title: "Durango Trails",
              popupTemplate: appconfig.template
            });

            map.add(featureLayer);

            // View
            var mapView = new MapView({
              container: "mapViewDiv",
              map: map,
              center: [-107.8, 37.3],
              zoom: 11,
              padding: {
                top: 50,
                bottom: 0
              },
              ui: { components: [] }
            });

            this.$parent.mapView = mapView;

            // Map widgets
            var home = new Home({
              view: mapView
            });
            mapView.ui.add(home, "top-left");

            var zoom = new Zoom({
              view: mapView
            });
           mapView.ui.add(zoom, "top-left");

            var compass = new Compass({
              view: mapView
            });
            mapView.ui.add(compass, "top-left");
            

            var scaleBar = new ScaleBar({
              view: mapView
            });
            mapView.ui.add(scaleBar, "bottom-left");
    }
  },
  watch: {},
  mounted: function(){
      //console.log('Map Component Mounted');
      this.loadMap();
  }, 
  // provide: function(){
  //   return {
  //     mapView: this.mapView
  //   }
  // }
};
</script>
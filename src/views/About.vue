<template>
  <div class="about" id="About">
    <h1>This is an about page</h1>
    <div>
      <esri-map></esri-map>
    </div>
  </div>
  
</template>
<script>
import EsriMap from '../components/Map';


export default {
  name:'About',
  props: {
    msg: String
  },
   methods:{
  
  },
  data: function() { return {
      
      mapView:null,
      title: "ArcGIS Webpack Vue Boilerplate",
      subtitle: "A Vue CLI 3yuguyg Starter Template using ArcGIS Webpack Plugin"
      
    }},
    // components: {"bottom-panel": BottomPanel, "navbar": Navbar, "panel-template":Panel, "info-panel":InfoPanel, "esri-map": EsriMap, "legend-panel":LegendPanel, "query-panel":QueryPanel, "login-panel":LoginPanel},
    components: { "esri-map": EsriMap},
}
</script>
import Vue from 'vue';
import App from './App.vue';

import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.min.css';

import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

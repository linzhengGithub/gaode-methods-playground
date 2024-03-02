import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/view/home/index.vue'
import DefaultMarker from '@/view/marker/default/index.vue'
import MassMarks from '@/view/mass/massMarks/index.vue'
import MarkerCluster from '@/view/mass/markerCluster/index.vue'
import Polyline from '@/view/line/polyline/index.vue'
import Polygon from '@/view/shape/polygon/index.vue'
import Circle from '@/view/shape/circle/index.vue'
import Rectangle from '@/view/shape/rectangle/index.vue'
import Ellipse from '@/view/shape/ellipse/index.vue'
import InfoWindow from '@/view/tool/infoWindow/index.vue'
import Control from '@/view/tool/control/index.vue'
import Weather from '@/view/tool/weather/index.vue'
import POI from '@/view/tool/poi/index.vue'
import MouseTool from '@/view/tool/mouseTool/index.vue'
import MarkerTrack from '@/view/track/markerTrack/index.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: 'Map',
    },
    {
      path: '/map',
      component: Home,
      name: 'Map',
    },
    {
      path: '/marker/default',
      component: DefaultMarker,
      name: 'DefaultMarker',
    },
    {
      path: '/mass/massMarks',
      component: MassMarks,
      name: 'MassMarks',
    },
    {
      path: '/mass/markerCluster',
      component: MarkerCluster,
      name: 'MarkerCluster',
    },
    {
      path: '/line/polyline',
      component: Polyline,
      name: 'Polyline',
    },
    {
      path: '/shape/polygon',
      component: Polygon,
      name: 'Polygon',
    },
    {
      path: '/shape/circle',
      component: Circle,
      name: 'Circle',
    },
    {
      path: '/shape/rectangle',
      component: Rectangle,
      name: 'Rectangle',
    },
    {
      path: '/shape/ellipse',
      component: Ellipse,
      name: 'Ellipse',
    },
    {
      path: '/tool/infoWindow',
      component: InfoWindow,
      name: 'InfoWindow',
    },
    {
      path: '/tool/control',
      component: Control,
      name: 'Control',
    },
    {
      path: '/tool/weather',
      component: Weather,
      name: 'Weather',
    },
    {
      path: '/tool/poi',
      component: POI,
      name: 'POI',
    },
    {
      path: '/tool/mouseTool',
      component: MouseTool,
      name: 'MouseTool',
    },
    {
      path: '/tool/markerTrack',
      component: MarkerTrack,
      name: 'MarkerTrack',
    },
  ],
})

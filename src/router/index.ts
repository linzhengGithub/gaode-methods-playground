import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/view/home/index.vue'
import DefaultMarker from '@/view/marker/default/index.vue'
import MassMarks from '@/view/mass/massMarks/index.vue'
import MarkerCluster from '@/view/mass/markerCluster/index.vue'

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
  ],
})

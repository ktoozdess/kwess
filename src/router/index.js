import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',

    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/BrowseView',
    name: 'BrowseView',

    component: () => import(/* webpackChunkName: "about" */ '../views/BrowseView.vue'),
    props: true
  },
  {
    path: '/book/:id',
    name: 'BookItem',

    component: () => import(/* webpackChunkName: "about" */ '../components/BookItem.vue'),
    props: true
  },
  {
    path: '/RecommendationsView',
    name: 'RecommendationsView',

    component: () => import(/* webpackChunkName: "about" */ '../views/RecommendationsView.vue'),
    props: true
  },
  {
    path: '/GreatEntrepreneursView',
    name: 'GreatEntrepreneursView',

    component: () => import(/* webpackChunkName: "about" */ '../views/GreatEntrepreneursView.vue'),
    props: true
  },
  {
    path: '/ForKids',
    name: 'ForKids',

    component: () => import(/* webpackChunkName: "about" */ '../views/ForKidsView.vue'),
    props: true
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

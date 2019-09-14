import Vue from 'vue'
import Router from 'vue-router'

import LayoutMainPerfil from "./layout/MainPerfil/Layout.vue";


Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',      
      component: LayoutMainPerfil,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('./views/Home.vue')
        },
        {
          path: 'proyectos',
          name: 'proyectos',
          component: () => import('./views/Projects.vue')
        },
        // {
        //   path: 'tecnologia',
        //   redirect: 'tecnologia/javascript',
        //   name: 'tecnologia'
        // },
        {
         
          path: 'tecnologia/:nombre',
          name: 'tecnologias',
          component: () => import('./views/Tecnologies.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

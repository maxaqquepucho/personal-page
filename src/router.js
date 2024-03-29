import Vue from 'vue'
import Router from 'vue-router'

import LayoutMainPerfil from "./layout/MainPerfil/Layout.vue";


Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
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
        {  // ruta de redireccion
          name: 'proyectos',
          path: 'proyecto',
          component: () => import('./views/Projects.vue')
        },
        {
          name: 'proyecto',
          path: 'proyecto/:id',
          component: () => import('./views/Project.vue')
        },
        { // ruta de redireccion
          path: 'tecnologia',
          redirect: 'tecnologia/javascript',
          name: 'tecnologias'
        },
        {         
          path: 'tecnologia/:nombre',
          name: 'tecnologia',
          component: () => import('./views/Tecnologies.vue')
        },
        
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

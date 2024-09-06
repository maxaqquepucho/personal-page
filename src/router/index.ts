import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '@/views/Home/index.vue'

const routes = [{ path: '/', component: Home }]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cart from '../views/Cart.vue'
import Products from '../views/Products.vue'
import Players from '../views/Players.vue'
import PlayerDetail from '../views/PlayerDetail.vue'
import Orders from '../views/Orders.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
    },
    {
      path: '/players',
      name: 'players',
      component: Players,
    },
    {
      path: '/players/:id',
      name: 'playerDetail',
      component: PlayerDetail,
      props: true,
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
    }
  ],
})

export default router
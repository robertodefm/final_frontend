import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '@/views/SearchView.vue'
import BuyCartView from '@/views/BuyCartView.vue'
import CocktailView from '@/views/CocktailView.vue'
import CommentsView from '@/views/CommentsView.vue'
import ErroView from '@/views/ErroView.vue'
import RegisterView from '@/views/RegisterView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/buycart',
      name: 'buycart',
      component: BuyCartView
    },
    {
      path: '/cocktail',
      name: 'cocktail',
      component: CocktailView
    },
    {
      path: '/comments',
      name: 'comments',
      component: CommentsView
    },
    {
      path: '/erro',
      name: 'erro',
      component: ErroView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/:pathMatch(.*)',
      name: 'erro',
      component: ErroView
    }
  ]
})

export default router

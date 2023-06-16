import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '@/views/SearchView.vue'
import ActionView from '@/views/ActionView.vue'
import CommentsView from '@/views/CommentsView.vue'
import ErroView from '@/views/ErroView.vue'
import RegisterView from '@/views/RegisterView.vue'
import CalculatorView from '@/views/CalculatorView.vue'
import { auth } from '../firebase.js';


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
      path: '/action',
      name: 'action',
      component: ActionView
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
      path: '/calculator',
      name: 'calculator',
      component: CalculatorView
    },
    {
      path: '/:pathMatch(.*)',
      name: 'erro',
      component: ErroView
    }
  ]
});

router.beforeEach((to,from,next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    const user = auth.currentUser;
    if (user){
      next()
    } else {
      next({
        name: 'register'
      })
    }
  }else {
    next();
  }
})

export default router

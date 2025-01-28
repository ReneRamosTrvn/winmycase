import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LawyerLogin from '@/views/LawyerLogin.vue'
import LawyerCreateAccount from '@/views/LawyerCreateAccount.vue'
import LawyerProfile from '@/views/LawyerProfile.vue'
import Pricing from '@/views/Pricing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'lawyerlogin',
      component: LawyerLogin,
    },
    {
      path: '/signup',
      name: 'lawyersignup',
      component: LawyerCreateAccount,
    },
    {
      path: '/profile',
      name: 'lawyerprofile',
      component: LawyerProfile,
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing,
    },
    // {
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router

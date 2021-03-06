import Vue from 'vue';
import VueRouter from 'vue-router';
import DashboardLayout from '@/components/layout/DashboardLayout.vue';
import LoginLayout from '@/components/layout/LoginLayout.vue';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Login from '@/views/Login.vue';
import store from '@/store';
import axios from 'axios';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
      }, {
        path: 'about',
        name: 'about',
        component: About,
      },

    ],
  },
  {
    path: '/login',
    component: LoginLayout,
    children: [
      {
        path: '',
        name: 'login',
        component: Login,
      },
    ],
  },
  {
    path: '/restrictedpage',
    beforeEnter: async (to, from, next) => {
      const accessToken = store.getters['auth/accessToken'];
      if (!accessToken) {
        next('/auth/login');
      }
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      await store.dispatch('auth/getUser');
      next();
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'nav-item active',
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;

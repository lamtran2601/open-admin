import Vue from 'vue';
import Router from 'vue-router';
import { Layout } from './views/Layout';
import { About } from './views/About';
import { LayoutRouters } from './views/Layout';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      children: [...LayoutRouters],
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});

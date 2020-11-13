import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: () => import('../layouts/default.vue'),
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "index" */ '../pages/index.vue'),
      },
      {
        path: '/blog',
        component: () => import(/* webpackChunkName: "blog" */ '../pages/blog.vue'),
      },
      {
        path: '/blog/hello',
        component: () => import(/* webpackChunkName: "blog-view" */ '../pages/blog-view.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

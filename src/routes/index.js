// routes/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/view/Layout.vue';
import Hello from '@/components/HelloWorld.vue';

const routes = [
  {
    path: '/',
    component: Hello,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});

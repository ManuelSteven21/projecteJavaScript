// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';
import CalculatorPage from '@/views/CalculatorPage.vue';
import CommentsPage from '@/views/CommentsPage.vue';
import UsersPage from '@/views/UsersPage.vue';


const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: CalculatorPage,
  },
  {
    path: '/comments',
    name: 'Comments',
    component: CommentsPage,
  },
  {
    path: '/users',
    name: 'Users',
    component: UsersPage,
  },
];

const router = createRouter({
  history: createWebHistory('/'),  // Ajusta aquí la base
  routes,
});

export default router;
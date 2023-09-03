import {createRouter, createWebHistory} from 'vue-router';
import homeRoute from './routes/homeRoute';
import notfoundRoute from './routes/notfoundRoute';
import aboutRoute from './routes/aboutRoute';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    homeRoute,
    aboutRoute,
    notfoundRoute
  ]
});


export default router;
import {createRouter, createWebHistory} from 'vue-router';
import homeRoute from './routes/homeRoute';
import notfoundRoute from './routes/notfoundRoute';
import aboutRoute from './routes/aboutRoute';
import contactRoute from './routes/contactRoute';
import shopRoute from './routes/shopRoute';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    homeRoute,
    aboutRoute,
    contactRoute,
    shopRoute,
    notfoundRoute
  ]
});


export default router;
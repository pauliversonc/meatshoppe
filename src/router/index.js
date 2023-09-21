import {createRouter, createWebHistory} from 'vue-router';
import homeRoute from './routes/homeRoute';
import notfoundRoute from './routes/notfoundRoute';
import aboutRoute from './routes/aboutRoute';
import contactRoute from './routes/contactRoute';
import shopRoute from './routes/shopRoute';
import cartRoute from './routes/cartRoute';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    homeRoute,
    aboutRoute,
    contactRoute,
    shopRoute,
    cartRoute,
    notfoundRoute
  ]
});


export default router;
import {createRouter, createWebHistory} from 'vue-router';
import homeRoute from './routes/homeRoute';
import notfoundRoute from './routes/notfoundRoute';
import aboutRoute from './routes/aboutRoute';
import contactRoute from './routes/contactRoute';
import searchRoute from './routes/searchRoute';
import cartRoute from './routes/cartRoute';
import productRoute from './routes/productRoute';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    homeRoute,
    aboutRoute,
    contactRoute,
    searchRoute,
    cartRoute,
    productRoute,
    notfoundRoute,
  ],
  scrollBehavior: () => ({
    top: 0,
  }),
});


export default router;
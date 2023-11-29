import {createRouter, createWebHistory} from 'vue-router';
import homeRoute from './routes/homeRoute';
import notFoundRoute from './routes/notFoundRoute';
import aboutRoute from './routes/aboutRoute';
import contactRoute from './routes/contactRoute';
import searchRoute from './routes/searchRoute';
import cartRoute from './routes/cartRoute';
import productRoute from './routes/productRoute';
import noProductRoute from './routes/noProductRoute';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    homeRoute,
    aboutRoute,
    contactRoute,
    searchRoute,
    cartRoute,
    productRoute,
    noProductRoute,
    notFoundRoute,
  ],
  scrollBehavior: () => ({
    top: 0,
  }),
  linkActiveClass: 'active',
});


export default router;
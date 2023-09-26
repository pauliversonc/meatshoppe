import {createRouter, createWebHistory} from 'vue-router';
import homeRoute from './routes/homeRoute';
import notfoundRoute from './routes/notfoundRoute';
import aboutRoute from './routes/aboutRoute';
import contactRoute from './routes/contactRoute';
import searchRoute from './routes/searchRoute';
import cartRoute from './routes/cartRoute';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    homeRoute,
    aboutRoute,
    contactRoute,
    searchRoute,
    cartRoute,
    notfoundRoute
  ]
});


export default router;
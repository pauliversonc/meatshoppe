import ProductPage from '../../components/pages/ProductPage.vue';
import store from '../../store/index.js';

const productRoute = {
  path: '/product/:id', 
  name: 'product',
  component: ProductPage,
  props: route => ({
    id: route.params.id,
    testBool: true, 
    testInt: 23, 
    testStr: 'chemical'
    // Add other dynamic props here based on route parameters
  }),

  beforeEnter: (to, from, next) => {
    console.log('to', to);
    console.log('from', from);
    console.log('next', next);
    console.log(store.getters['cart/getCartTest']);
    

    next();
    // Temporary redirect to notfound
    // the best is create a page for (noProductFound)
    // contents of (noProductFound) is "list of product suggestions"
    // next({ name: 'notFound' });
  },

}

export default productRoute;
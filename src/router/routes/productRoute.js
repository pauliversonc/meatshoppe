import ProductPage from '../../components/pages/ProductPage.vue';
import store from '../../store/index.js';

const productRoute = {
  path: '/product/:id', 
  name: 'product',
  component: ProductPage,
  props: route => ({
    id: route.params.id,
  }),

  beforeEnter: (to, _, next) => {
    const isProductExist = store.getters['products/isIdInProducts'](+to.params.id);
    if (isProductExist) {
      next();
    } else {
      next({ name: 'noProduct'});
    }

  },

}

export default productRoute;
import { createStore } from "vuex";
import cartModule from "./modules/cart/index.js";
import productModule from "./modules/products/index.js";

const store = createStore({
  modules: {
    cart: cartModule,
    product: productModule,
  }
});

export default store;
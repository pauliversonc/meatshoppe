import { createStore } from "vuex";
import cartModule from "./modules/cart/index.js";

const store = createStore({
  modules: {
    cart: cartModule,
  }
});

export default store;
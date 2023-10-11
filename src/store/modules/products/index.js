import productsState from "./state.js";
import productsMutations from "./mutations.js";
import productsActions from "./actions.js";
import productsGetters from "./getters.js";

const productsIndex = {
  namespaced: true,
  state: productsState,
  mutations: productsMutations,
  actions: productsActions,
  getters: productsGetters,
}

export default productsIndex;
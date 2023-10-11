import cartState from "./state.js"
import cartMutations from "./mutations.js"
import cartActions from "./actions.js"
import cartGetters from "./getters.js"

const cartIndex = {
  namespaced: true,
  state: cartState,
  mutations: cartMutations,
  actions: cartActions,
  getters: cartGetters,
}

export default cartIndex;
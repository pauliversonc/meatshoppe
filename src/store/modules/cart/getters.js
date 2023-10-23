const cartGetters = {
  getProductCart: (state) => (id) => {
    return state.cart.filter(product => product.id === id);
  },
}
export default cartGetters;

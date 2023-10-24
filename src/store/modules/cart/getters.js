const cartGetters = {
  getProductCart: (state) => (prod) => {
    const {id, weight} = prod;
    return state.cart.filter(product => product.id === id && product.weight === weight);
  },
}
export default cartGetters;

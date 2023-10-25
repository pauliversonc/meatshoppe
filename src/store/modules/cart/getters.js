const cartGetters = {
  getProductCart: (state) => (prod) => {
    const {id, weight} = prod;

    const filteredProduct = state.cart.filter(product => product.id === id && product.weight === weight);
    return filteredProduct.length > 0 ? filteredProduct : false;
  },
}
export default cartGetters;

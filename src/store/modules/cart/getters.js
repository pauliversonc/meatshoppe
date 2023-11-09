const cartGetters = {
  getProductCart: (state) => (prod) => {
    const {id, weight} = prod;

    const filteredProduct = state.cart.filter(product => product.id === id && product.weight === weight);
    return filteredProduct.length > 0 ? filteredProduct : false;
  },

  getErrorQty(state){
    return state.errors.qty;
  },

  getCartCount(state) {
    return (state.cart.length) ? state.cart.length : 0;
  },

  getProducts(state) {
    return (state.cart.length) ? state.cart : false;
  },
  
}
export default cartGetters;

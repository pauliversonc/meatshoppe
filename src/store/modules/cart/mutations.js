const cartMutations = {
  addToCart(state, payload) {

    // find product by id and weight => this might returns an exiting product in the cart
    const existingProduct = state.cart.find(item => item.id === payload.id && item.weight === payload.weight);
    // if the product is found increase the qty
    if(existingProduct) {
      existingProduct.qty += payload.qty; 
    }

    // else push product to the cart
    else {
      state.cart.push(payload);
    }


  },

  updateQuantity(state, payload) {
    const existingProduct = state.cart.find(item => item.id === payload.productId && item.weight === payload.weight);
    if(existingProduct) existingProduct.qty = +payload.qty;
  },

  deleteProduct(state, payload) {
    const updatedCart = state.cart.filter(item => !(item.id === payload.id && item.weight === payload.weight));
    state.cart = updatedCart;
  },

}
export default cartMutations;
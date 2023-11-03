const cartMutations = {
  addToCart(state, payload) {
    console.warn(payload)

    // find product by id and weight => this might returns an exiting product in the cart
    const existingProduct = state.cart.find(item => item.id === payload.id && item.weight === payload.weight);

    // if the product is found increase the qty
    if(payload.isAvailable) {
      existingProduct.qty += payload.qty; 
    }

    // else push product to the cart
    else {
      state.cart.push(payload);
    }


  },
}
export default cartMutations;
const cartMutations = {
  addToCart(state, payload) {

    // find product by id and weight
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
}
export default cartMutations;
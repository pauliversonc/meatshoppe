const cartMutations = {
  addToCart(state, payload) {
    // clear qty error
    state.errors.qty = "";


    // find product by id and weight => this might returns an exiting product in the cart
    const existingProduct = state.cart.find(item => item.id === payload.id && item.weight === payload.weight);
    // console.log(payload.qty) // from user
    // console.log(existingProduct.qty) // from cart
    

    let maxQty = payload.stock;
    maxQty = Math.floor(payload.stock / payload.weight);
  

    // if the product is found increase the qty
    if(existingProduct) {
      // check if valid or stock is available
      const isAvailable = (payload.qty + existingProduct.qty) <= maxQty;
      if(isAvailable) {
        existingProduct.qty += payload.qty; 
        console.log('add existing')
      } else {
        state.errors.qty = "You have reached the maximum quantity available for this item";
        console.log('error')
      }

    }

    // else push product to the cart
    else {
      state.cart.push(payload);
      console.log('pasok')
    }


  },
}
export default cartMutations;
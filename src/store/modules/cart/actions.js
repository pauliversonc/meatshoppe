const cartActions = {
  addToCart(context, payload) {
    context.commit('addToCart', payload);
  },

  updateQuantity(context, payload) {
    context.commit('updateQuantity', payload);
  }
}
export default cartActions;
const cartActions = {
  addToCart(context, payload) {
    context.commit('addToCart', payload);
  },

  updateQuantity(context, payload) {
    context.commit('updateQuantity', payload);
  },

  deleteProduct(context, payload) {
    context.commit('deleteProduct', payload);
  },


}
export default cartActions;
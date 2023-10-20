const cartActions = {
  addToCart(context, payload) {
    context.commit('addToCart', payload);
  },
}
export default cartActions;
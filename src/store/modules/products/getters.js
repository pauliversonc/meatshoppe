const productsGetters = {
  // get all products
  getProducts(state) {
    return state.products;
  },

  // nested arrow function
  // check if this product id has the same id in products
  isIdInProducts: (state) => (id) => {
    return state.products.some(product => product.id === id);
  },

  getProduct: (state) => (id) => {
    return state.products.filter(product => product.id === id);
  }
}
export default productsGetters;
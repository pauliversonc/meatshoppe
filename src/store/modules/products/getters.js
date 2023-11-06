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

  // get product by id
  getProduct: (state) => (id) => {
    return state.products.filter(product => product.id === id);
  },

  checkProductAvailability: (_, getters) => (id, tempWeight) => {

    // reuse get product by id
    const [product] = getters.getProduct(id);

    const resp = {
      // check if stock is available
      isAvailable: tempWeight <= product.stock,
      availableStock: product.stock
    }

    return resp;
  },


}
export default productsGetters;
export const checkAccumulatedProductStock = (id, store) => {
  // Get the accumulated stock from the cart
  const tempAccumulatedStock = store.getters['cart/getTotalStocks'](+id);
  return tempAccumulatedStock;
};

export const takeMaxQty = (id, store, weight = 1) => {
  // Get product stock
  const [{ stock }] = store.getters['products/getProduct'](id);

  // Get accumulated stock from the cart
  const cartStock = checkAccumulatedProductStock(id, store);

  // Calculate max quantity
  const maxQty = Math.floor((stock - cartStock) / +weight);

  const data = {
    stock,
    maxQty
  }
  return data;
};

export const formatCurrency = (price) => {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2,
  }).format(price);
};

// currently not use
export const getRandomNumbers = (array, count) => {
  const shuffledArray = array.slice(); // Create a shallow copy of the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray.slice(0, count);
}

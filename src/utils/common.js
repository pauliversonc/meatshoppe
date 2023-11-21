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

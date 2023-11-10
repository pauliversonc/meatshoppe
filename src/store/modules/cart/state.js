const cartState = {
  cart: [
    {
      "id": 2,
      "weight": 15,
      "qty": 2,
      "stock": 100,
    },

    {
      "id": 2,
      "weight": 1,
      "qty": 1,
      "stock": 100,
    },

  ],

  promoCodes: [
    {"code" : "MEATSHOPPE2023", "discount": 200, "minSpend": 2000},
    {"code" : "BEATTHEHEAT123", "discount": 50, "minSpend": 1000},
    {"code" : "MAKEITHAPPEN11", "discount": 20, "minSpend": 500},
  ],

  errors: {
    qty: "",
  },
}
export default cartState;
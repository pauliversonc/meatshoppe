const cartState = {
  cart: [
    // {
    //   "id": 2,
    //   "weight": 15,
    //   "qty": 4,
    // },
    // {
    //   "id": 2,
    //   "weight": 1,
    //   "qty": 6,
    // },

  ],

  promoCodes: [
    {"code" : "MEATSHOPPE2023", "discount": 200, "minSpend": 2000, "qty": 10},
    {"code" : "BEATTHEHEAT123", "discount": 50, "minSpend": 1000, "qty": 20},
    {"code" : "MAKEITHAPPEN11", "discount": 20, "minSpend": 500, "qty": 30},
  ],

  errors: {
    qty: "",
  },
}
export default cartState;
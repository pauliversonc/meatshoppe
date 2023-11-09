const cartState = {
  cart: [
    {
      "id": 2,
      "name": "Chicken Liver Goncalves & Tortola 1kg or 15kg",
      "description": "Experience the rich and savory flavor of our Fresh Frozen Chicken Liver from Goncalves & Tortola! Ideal for gourmet dishes. Choose from a 1-kilogram package for home cooks or a generous 15-kilogram option for professionals.",
      "code": "CK-LIVER-(GONCALVES & TORTOLA/CANCAO) (STD 15)",
      "brand": "goncalves & tortola",
      "weight": 15,
      "price": 106,
      "category": ["chicken", "frozen"],
      "discountPercentage": 0,
      "stock": 100,
      "thumbnail": "p-butobuto.jpg",
      "images": "p-butobuto.jpg",
      "photoSm": ["ck-wings-1.jpg", "ck-wings-2.jpg", "ck-wings-3.jpg", "ck-wings-4.jpg", "ck-wings-5.jpg"],
      "photoLg": ["ck-wings-1.jpg", "ck-wings-2.jpg", "ck-wings-3.jpg", "ck-wings-4.jpg", "ck-wings-5.jpg"],
      "part": "liver",
      "qty": 2,
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
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cocktails: [],
  }),

  getters: {
    cartItems: (state) => state.cocktails,
  },

  actions: {
    addToCart(cocktail) {
      const existingItem = this.cocktails.find((item) => item.id === cocktail.id);

      if (existingItem) {
        // El cocktail ya está en el carrito, incrementa la cantidad
        existingItem.quantity++;
      } else {
        // Agrega un nuevo cocktail al carrito
        this.cocktails.push(cocktail);
      }
    },
    
    incrementQuantity(cocktail) {
      const item = this.cocktails.find((item) => item.id === cocktail.id);
      if (item) {
        item.quantity++;
      }
    },
    
    decrementQuantity(cocktail) {
      const item = this.cocktails.find((item) => item.id === cocktail.id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    
    removeFromCart(cocktail) {
      const index = this.cocktails.findIndex((item) => item.id === cocktail.id);
      if (index !== -1) {
        this.cocktails.splice(index, 1);
      }
    },
  },
});


import { defineStore } from 'pinia'

export const useCocktailsStore = defineStore('cocktails', {
  state: () => ({
    selectedCocktail: null
  }),
  actions: {
    setSelectedCocktail(cocktail) {
      this.selectedCocktail = cocktail
    },
    clearSelectedCocktail() {
      this.selectedCocktail = null
    }
  }
})

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const useCocktailsStore = defineStore('cocktails', {
  state: () => {
    return{

      cocktailId: 0,
      selectCocktail:null
    }
  }, actions:{
    
    getCocktail: () => {
       
     fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + this.cocktailId)
         .then(data => data.json())
         .then(res => res.drinks)
         .then(final => this.selectCocktail = final.map(dados => dados))
      
  }
}
})

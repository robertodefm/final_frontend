import { defineStore } from 'pinia'


export const useCarbonFootprintStore = defineStore('carbonfootprint',{
  state: () => ({
    result: null, // Último resultado de la calculadora de huella de carbono
    history: [], // Historial de resultados
  }),
  getters: {
    getResult: (state) => state.result,
    getHistory: (state) => state.history,
  },
  actions: {
    setResult(result) {
      this.result = result
    },
    addToHistory(email) {
      // const { email } = user.email
      const newResult = {
        email,
        result: this.result,
      }
    
      this.history.push(newResult)
    },
  },
})

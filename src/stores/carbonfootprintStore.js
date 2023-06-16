import { defineStore } from 'pinia'


export const useCarbonFootprintStore = defineStore('carbonfootprint',{
  state: () => ({
    result: null, // Último resultado de la calculadora de huella de carbono
    mesagge: null,
    history: [], // Historial de resultados
  }),
  getters: {
    getResult: (state) => state.result,
    getHistory: (state) => state.history,
    getHistory: (state) => state.mesagge,
  },
  actions: {
    setMessage(message) {
      this.message = message
    },setResult(result) {
      this.result = result
    },
    addToHistory(email) {
      // const { email } = user.email
      const newResult = {
        email,
        result: this.result,
        message: this.message
        
      }
    
      this.history.push(newResult)
    },
  },
})

import { defineStore } from 'pinia';

export const useCarbonFootprintStore = defineStore('carbonfootprint', {
  state: () => ({
    user: null,
    calculos: [],
  }),
  actions: {
    guardarCalculo(calculo) {
      this.calculos.push(calculo);
    },
    limpiarCalculos() {
      this.calculos = [];
    },
  },
});

import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    darkMode: false 
  }),
  getters: {
    isLoggedIn: state => state.user !== null,
    isDarkMode: state => state.darkMode,
    getEmail: (state) => {
      return state.user ? state.user.email : null;
    } 
  },
  actions: {
    login(user) {
      this.user = user
    },
    logout() {
      this.user = null
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode 
    }
  }
})
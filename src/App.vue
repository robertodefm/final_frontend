<template>
  <div class="container color" :class="{ 'dark-mode': userStore.isDarkMode }">
    <NavBar />
    <RouterView />

    <Footer />
    <Login />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Login from '@/components/Login.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from  '@/components/Footer.vue'
import { useUserStore } from '@/stores/usersStore.js'

const userStore = useUserStore()

</script>
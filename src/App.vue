<template>
  <div class="container color" :class="{ 'dark-mode': userStore.isDarkMode }">
    <NavBar />
    <RouterView />

    <footer class="text-center text-lg-start color">

      <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

        <div class="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>



        <div>
          <a href="https://fb.com" class="me-4 color">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" class="me-4 color">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://google.com" class="me-4 color">
            <i class="fab fa-google"></i>
          </a>
          <a href="https://instagram.com" class="me-4 color">
            <i class="fab fa-instagram"></i>
          </a>

        </div>

      </section>



      <section class="">
        <div class="container text-center text-md-start mt-5">

          <div class="row mt-3">

            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3 color"></i>KOI Disco Bar
              </h6>
              <p>
                COME AND EXPERIENCE A NIGHT YOU WON'T FORGET
              </p>
            </div>



            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 class="text-uppercase fw-bold mb-4">

              </h6>
              <p>
                <a href="#!" class="text-reset"></a>
              </p>
              <p>
                <a href="#!" class="text-reset"></a>
              </p>
              <p>
                <a href="#!" class="text-reset"></a>
              </p>
              <p>
                <a href="#!" class="text-reset"></a>
              </p>
            </div>



            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 class="text-uppercase fw-bold mb-4">
                lINKS
              </h6>
              <p>
                <a href="index.html" class="text-reset">Home</a>
              </p>
              <p>
                <a href="pesquisa.html" class="text-reset">Search</a>
              </p>
              <p>
                <a href="comentarios.html" class="text-reset">Reviews</a>
              </p>

            </div>



            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i class="fas fa-home me-3 color"></i> Madeira, Portugal</p>
              <p>
                <i class="fas fa-envelope me-3 color"></i>
                koidiscobar@gmail.com
              </p>
              <p><i class="fas fa-phone me-3 color"></i> + 01 234 567 88</p>
              <p><i class="fas fa-print me-3 color"></i> + 01 234 567 89</p>
            </div>

          </div>

        </div>
      </section>

      <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.025);">
        © 2023 Copyright:
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/">KOIdb.com</a>
      </div>

    </footer>
    <Login />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Login from '@/components/Login.vue'
import NavBar from '@/components/NavBar.vue'
import { useUserStore } from '@/stores/usersStore.js'

const userStore = useUserStore()

</script>
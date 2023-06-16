<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Login</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="loginForm" class="mx-1 mx-md-4" @submit.prevent="">
              <div class="d-flex flex-row align-items-center mb-4">
                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                <div class="form-outline flex-fill mb-0">
                  <input type="email" class="form-control" v-model="email" required autocomplete="email" />
                  <label class="form-label" for="email">Your Email</label>
                </div>
              </div>
              <div class="d-flex flex-row align-items-center mb-4">
                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                <div class="form-outline flex-fill mb-0">
                  <input type="password" class="form-control" v-model="password" required autocomplete="current-password" />
                  <label class="form-label" for="password">Password</label>
                </div>
              </div>
              <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <button type="submit" class="btn btn-dark btn-lg" @click="handleLogin">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { auth } from '../firebase.js';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();

  const email = ref('');
  const password = ref('');

  
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
      console.log(userCredential);
      resetData();
      alert('Welcome!');
      const signupModal = document.querySelector('#exampleModal')
      const modal = bootstrap.Modal.getInstance(signupModal)
      modal.hide()
      router.push({ name: 'calculator' });
    } catch (error) {
        if (error.code == 'auth/invalid-email') {
            alert('Invalid email')
        } else if (error.code == 'auth/email-already-in-use') {
            alert('Email already in use')
        } else if (error.code == 'auth/weak-password') {
            alert('Password should be at least 6 characters')
        } else if (error.code) {
            alert('Something went wrong')
        }
    }
  };
  
  const resetData = () => {
    email.value = '';
    password.value = '';
  };
  
  </script>
  
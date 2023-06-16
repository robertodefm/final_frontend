<template>
    <div class="container h-100 color">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
                <div class="card text-black" style="border-radius: 25px;">
                    <div class="card-body p-md-5 color">
                        <div class="row justify-content-center color">
                            <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                <form id="signupForm" class="mx-1 mx-md-4" @submit.prevent="">

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <input type="email" class="form-control" v-model="email" required autocomplete="email"/>
                                            <label class="form-label" for="email">Your Email</label>
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <input type="password" class="form-control" v-model="password" required autocomplete="current-password"/>
                                            <label class="form-label" for="password">Password</label>
                                        </div>
                                    </div>


                                    <div class="form-check d-flex justify-content-center mb-5">
                                        <input class="form-check-input me-2" type="checkbox" value="" v-model="check" required/>
                                        <label class="form-check-label" for="form2Example3">
                                            I agree all statements in <a href="#!">Terms of service</a>
                                        </label>
                                    </div>

                                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <button type="submit" class="btn btn-dark btn-lg" @click="handleRegister">Register</button>
                                    </div>

                                </form>

                            </div>
                            <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                <img src="https://img.freepik.com/free-photo/cosmic-background-with-colorful-laser-lights-perfect-digital-wallpaper_181624-24679.jpg?w=1380&t=st=1674560729~exp=1674561329~hmac=f7f1dc3a4a2efc7151f45021523a63ed940e583e5cc0ee1ad3c609b6d7fcd0ba"
                                    class="img-fluid" alt="Sample image">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup>
import { ref } from 'vue';
import { auth } from '../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';


const router = useRouter();

const name = ref('');
const email = ref('');
const password = ref('');
const check = ref(false)


const handleRegister = async () => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        console.log(userCredential);
        resetData();
        alert('Welcome!')
        router.push({name:'home'})
        
    } catch (error) {
        if (error.code== 'auth/invalid-email'){
        alert('Invalid email')
    }else if (error.code == 'auth/email-already-in-use'){
        alert('Email already in use')
    }else if (error.code == 'auth/weak-password'){
        alert('Password should be at least 6 characters')
    }else if (error.code){
        alert('Something went wrong')
    }
}
};

const resetData = () => {
    name.value = '';
    email.value = '';
    password.value = '';
    check.value=false;
};



</script>
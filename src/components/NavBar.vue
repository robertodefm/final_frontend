<template>
    <nav class="navbar navbar-expand-lg color">
        <div class="container-fluid ">
            <RouterLink to="/" class="navbar-brand fs-3 fw-bold color">KOI</RouterLink>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink to="/search" class="nav-link  color" aria-current="page">Search</RouterLink>
                    </li>
                    <li class="nav-item ">
                        <RouterLink to="/cocktail" class="nav-link color">Cocktail</RouterLink>
                    </li>
                    <li class="nav-item ">
                        <RouterLink to="/comments" class="nav-link color">Reviews</RouterLink>
                    </li>
                    <li class="nav-item ">
                        <RouterLink to="/erro" class="nav-link color">Error</RouterLink>
                    </li>
                    <li class="ms-5 fs-6 border ">
                        <form action="" class="darkmode">
                            <fieldset>
                                <legend></legend>
                                <label for="tema">Claro</label>
                                <input checked type="radio" name="tema" id="claro">
                                &emsp;
                                <label for="tema">Oscuro</label>
                                <input type="radio" name="tema" id="oscuro">
                            </fieldset>
                        </form>
                    </li>
                </ul>
                <form class="grid column-gap-3 d-flex" role="search" >
                    <span class="d-flex align-items-center">{{user?.email}}</span>
                    <RouterLink to="/" class="g-col-6 btn  btn-dark logged-in align-items-center d-flex" id="logout" v-if="user" @click="logout">Logout</RouterLink>
                    <div v-else>
                        <button class="g-col-6 btn  btn-dark logged-out" type="button" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">Login</button>
    
                        <RouterLink to="/register" class="g-col-6 btn  btn-light logged-out">Register</RouterLink>

                    </div>


                    <RouterLink to="/buycart" class="g-col-6 btn fs-4 color"><i class="fa-solid fa-cart-shopping"></i>
                    </RouterLink>
                </form>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();

const auth = getAuth(); // Obtén la instancia de autenticación


const user = ref(null);

const logout = () => {
  auth.signOut().then(() => {
    router.push({ name: 'home' });
  });
};

onMounted(() => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      user.value = currentUser;
    } else {
      user.value = null;
    }
  });
});
</script>
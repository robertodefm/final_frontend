<template>
    <section class="d-flex flex-column justify-content-center align-items-center color">

        <div class="input-group rounded color mx-5">

            <input type="text" v-model="search" class="form-control rounded" placeholder="Search">
            <button @click="getLista(search)" class="input-group-text border-0"><i class="fas fa-search"></i></button>
        </div>
        <br>

        <div class="row row-cols-1 row-cols-md-3 g-4 px-5 mt-5 color  ">

            <div v-for="item in lista" class="col ">
                <div class="card h-100 color border">

                    <img :src="item.strDrinkThumb"  class="card-img-top">
                    <div class="card-body">
    
                        <RouterLink class="card-title d-flex justify-content-center" to="/cocktail" @click="cocktail.cocktailId=item.idDrink"> {{ item.strDrink }}</RouterLink>
                        
                    </div>
                </div>
            </div>
        </div>



    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useCocktailsStore } from '@/stores/cocktailsStore.js'

const cocktail = useCocktailsStore()
const search = ref('')
const lista = ref([])

const getLista = (search) => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + search)
        .then(data => data.json())
        .then(res => res.drinks)
        .then(final => lista.value = final.map(dados => dados))
}
</script>
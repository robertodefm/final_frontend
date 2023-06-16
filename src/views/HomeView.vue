<!-- <script setup>
import { useCarbonFootprintStore } from '@/stores/carbonFootprintStore.js';


const carbonFootprintStore = useCarbonFootprintStore();

const getHistoryLength = () => {
  const history = carbonFootprintStore.$state.history;
  return history.length;
};
</script>

<template>
  
    
    <div class="img-principal d-flex justify-content-center align-items-center">
      <h1>Leaf calculator</h1>
    </div>
    <section class="d-flex flex-column justify-content-center align-items-center color">
      <h2>Save the World</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi sit voluptate rerum eius iure, porro aliquid vel impedit doloribus.

      </p>
      <div class="galery ">
        <div class="d-flex gal justify-content-center">
          <div class="img1"></div>
          <div class="img2"></div>
          <div class="img3"></div>
        </div>
        <div class="d-flex gal justify-content-center ">
          <div class="img4"></div>
          <div class="img5"></div>
          <div class="img6"></div>
        </div>
      </div>


      <h3 class="mt-5">Together we can have a better world!</h3>
    </section>
    
  
  
  </template> -->


  <template>
    <div>
      <div class="img-principal d-flex justify-content-center align-items-center">
        <h1>Leaf calculator</h1>
      </div>
      <section class="d-flex flex-column justify-content-center align-items-center color">
        <h2>Save the World</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi sit voluptate rerum eius iure, porro aliquid vel impedit
          doloribus.
        </p>
        <div class="galery">
          <div class="d-flex gal justify-content-center">
            <div class="img1"></div>
            <div class="img2"></div>
            <div class="img3"></div>
          </div>
          <div class="d-flex gal justify-content-center">
            <div class="img4"></div>
            <div class="img5"></div>
            <div class="img6"></div>
          </div>
        </div>
  
        <h3 class="mt-5">Together we can have a better world!</h3>
      </section>
  
      <div class="container">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Total de pegadas de carbono calculadas</h5>
            <p class="card-text">{{ historyLength }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useCarbonFootprintStore } from '@/stores/carbonFootprintStore.js';
  
  const carbonFootprintStore = useCarbonFootprintStore();
  
  const getHistoryLength = () => {
    const history = carbonFootprintStore.$state.history;
    return history.length;
  };
  
  const historyLength = getHistoryLength();
  </script>
  

  
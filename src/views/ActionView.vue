<template>
  <h2 class="mb-4">Selected ecological action</h2>
  <div class="container my-4 ">
    <div v-if="selectedAction" class="text-center ">
      <div>
        <img :src="selectedAction.image" :alt="selectedAction.nome" class="img-fluid">
        <h3 class="mt-3">{{ selectedAction.nome }}</h3>
      </div>
      <div>
        <p class="card-text">{{ selectedAction.descricao }}</p>
        <p class="card-text">CO2: {{ selectedAction.CO2 }}</p>
        <p class="card-text">Categoria: {{ selectedAction.categoria }}</p>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useActionStore } from '@/stores/actionStore.js';

const actionStore = useActionStore();
const selectedAction = ref(null);


const fetchSelectedAction = async () => {
  const actionId = actionStore.selectedActionId.id;
  if (!actionId) return;

  try {
    const response = await fetch(`https://umacarbono-default-rtdb.firebaseio.com/acao/${actionId}.json`);
    const data = await response.json();
    selectedAction.value = data;
  } catch (error) {
    console.error('Error fetching selected action:', error);
  }
};

onMounted(fetchSelectedAction);

</script>


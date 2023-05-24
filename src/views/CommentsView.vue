<template>
  <div class="cabulas">
    <AddEditApontamento v-model="newApontamento" ref="newApontamentoRef" v-if="userStore.user">
      <template #buttons>
        <button class="btn btn-light text-dark mt-3" @click="addApontamento" :disabled="!newApontamento">
          Adicionar
        </button>


      </template>
    </AddEditApontamento>


    <Apontamento v-for="cabula in cabulasStore.apontamentos" :key="cabula.id" :cabula="cabula"
      @deleteClicked="deleteApontamento" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Apontamento from '@/components/cabula.vue'
import AddEditApontamento from '@/components/AddEditCabula.vue'
import { useCabulasStore } from '@/stores/cabulasStore';
import { useUserStore } from '@/stores/usersStore.js'

const userStore = useUserStore()


const cabulasStore = useCabulasStore()
const newApontamentoRef = ref(null)
const newApontamento = ref('')
const userEmail = ref('')
onMounted(() => {
  cabulasStore.getApontamentos()
});



const addApontamento = () => {
  cabulasStore.addApontamento(newApontamento.value)
  newApontamento.value = ''
  newApontamentoRef.value.focusTextarea()
}

const deleteApontamento = (apontamento) => {
  cabulasStore.deleteApontamento(apontamento)
}
</script>

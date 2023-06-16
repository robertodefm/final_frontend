
   <template>
    <section class="d-flex flex-column justify-content-center align-items-center color">
      <div class="input-group rounded color mx-5">
        <input type="text" v-model="search" class="form-control rounded" placeholder="Search">
        <button @click="getLista(search)" class="input-group-text border-0"><i class="fas fa-search"></i></button>
      </div>
      <br>
      <div class="row row-cols-1 row-cols-md-3 g-4 px-5 mt-5 color">
        <div v-for="item in lista" :key="item.id" class="col">
          <div class="card h-100 color border">
            <img :src="item.image" class="card-img-top">
            <div class="card-body">
                <RouterLink class="card-title d-flex justify-content-center" :to="`/action?id=${item.id}`"
              @click="setSelectedAction(item)">
                {{ item.nome }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useActionStore } from '@/stores/actionStore.js'
  import { useRouter, RouterLink } from 'vue-router'
  
  const actionStore = useActionStore()
  const router = useRouter()
  const search = ref('')
  const lista = ref([])
  
  const getLista = async (search) => {
  const response = await fetch(`https://umacarbono-default-rtdb.firebaseio.com/acoes.json?orderBy="categoria"&equalTo="${search}"`);
  const data = await response.json();
  const final = data || [];
  lista.value = final;
};



  
  const setSelectedAction = (action) => {
  actionStore.setSelectedActionId(action)
}

  </script>
  
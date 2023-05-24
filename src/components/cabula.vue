<template>

    <div class="card mb-4">
        <div class="card-body">
            <p class="card-text">{{ cabula.content }}</p>
            <div class="text-end text-muted">
                <small>{{ cabula.content.length }} {{ numLetrasText }}</small>
            </div>
        </div>
        <!-- <div class="card-footer">
            <RouterLink :to="'/editApontamento/' + cabula.id" class="btn btn-outline-dark me-2">Edit</RouterLink>
            <a href="#" @click.prevent="cabulasStore.deleteApontamento(cabula.id)" class="btn btn-outline-dark">Delete</a>
        </div> -->
    </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useCabulasStore } from '../stores/cabulasStore';
import { useUserStore } from '@/stores/usersStore.js'

const userStore = useUserStore()

const cabulasStore = useCabulasStore()
const props = defineProps({
    cabula: {
        type: Object,
        require: true
    }
})

const numLetrasText = computed(() => props.cabula.content.length > 1 ? 'carateres' : 'caráter')
</script>
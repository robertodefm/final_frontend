<template>

    <div class="card bg-dark text-white p-4 mb-5">
    <div class="form-group">
        <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" ref="textareaRef" class="form-control" placeholder="Adicionar apontamento"></textarea>
    </div>
    <div class="d-flex justify-content-end">
        <div class="btn-group">
            <slot name="buttons"></slot>
        </div>
    </div>
</div>

</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue:{
        type: String,
        required: true
    }
})
const textareaRef = ref(null)
const focusTextarea = ()=> {
    textareaRef.value.focus()
}
defineExpose({
    focusTextarea
})
</script>
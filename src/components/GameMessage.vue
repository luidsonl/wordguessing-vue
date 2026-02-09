<script setup>
import { computed } from 'vue'

const props = defineProps({
    message: String,
    color: String
})

const styleMap = {
    blue:  'bg-blue-100 border-blue-500 text-blue-800',
    green:  'bg-green-100 border-green-500 text-green-800',
    red:    'bg-red-100 border-red-500 text-red-800',
    yellow: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    gray:   'bg-gray-100 border-gray-400 text-gray-600'
}

const alertStyle = computed(() => {
    const selectedColor = props.color in styleMap ? props.color : 'gray'
    return styleMap[selectedColor]
})

</script>

<template>
    <div 
        class="border-2 rounded-2xl p-4 shadow-sm transition-all text-center"
        :class="alertStyle"
    >
        {{ message }}
    </div>
</template>
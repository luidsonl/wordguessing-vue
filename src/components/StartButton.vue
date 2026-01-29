<script setup>
import { GeneralStore } from '@/stores/GeneralStore';

const generalStore = GeneralStore()
</script>

<template>
    <div class="flex justify-center">
         <button class="cursor-pointer px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors cursor" v-on:click="generalStore.setFalseStartPanel">
            Start
        </button>
    </div>
   
</template>
<script setup>
import { useGeneralStore } from '@/stores/GeneralStore';

const generalStore = useGeneralStore()
</script>

<template>
    <div class="w-full max-w-3xl mx-auto p-4 border border-gray-300 rounded bg-white mt-4">
        <h2 v-if="generalStore.isWinner" class="text-center text-2xl text-green-800">Congratulations</h2>
        <h2 v-else class="text-center text-2xl text-red-800">You Lost</h2>
        <div class="text-center mt-3 text-lg">The secret word is <span class="text-2xl text-green-800">{{ generalStore.secretWord.toUpperCase() }}</span></div>
    </div>

    <div class="flex justify-center mt-4 text-2xl">
        <button v-on:click="generalStore.reset" class="cursor-pointer px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors cursor">Retry</button>
    </div>

</template>
<script setup>
import { useGeneralStore } from '@/stores/GeneralStore';
import { useWordStore } from '@/stores/WordStore';

const generalStore = useGeneralStore();

</script>

<template>
    <header class="bg-gray-800 text-white p-4 text-center text-base font-bold flex items-center justify-around">
        <span>Word Guessing Game</span>
        <nav>
            <button v-if="generalStore.gameRunning" class="cursor-pointer px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors cursor" v-on:click="generalStore.reset">Reset</button>
        </nav>
    </header>
</template>

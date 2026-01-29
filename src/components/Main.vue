<script setup>
import Board from './Board.vue';
import StartPanel from './StartPanel.vue';
import { GeneralStore } from '@/stores/GeneralStore';

const generalStore = GeneralStore()


</script>

<template>
    <main class="min-h-screen bg-gray-100 p-4">
        <StartPanel v-if="generalStore.getShowStartPanel" />
        <Board v-else />
    </main>
</template>
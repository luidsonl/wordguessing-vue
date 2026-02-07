<script setup>
import Board from '@/components/Board.vue';
import StartPanel from '@/components/StartPanel.vue';
import { useGeneralStore } from '@/stores/GeneralStore';

const generalStore = useGeneralStore()


</script>

<template>
    <main class="bg-gray-100 p-4">
        <Board v-if="generalStore.gameRunning" />
        <StartPanel v-else />
        
    </main>
</template>
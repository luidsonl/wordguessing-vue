<script setup>
import StartPanel from '@/components/StartPanel.vue';
import { useGeneralStore } from '@/stores/GeneralStore';
import Game from './Game.vue';

const generalStore = useGeneralStore()


</script>

<template>
    <main class="bg-gray-100 p-4">
        <Game v-if="generalStore.gameRunning" />
        <StartPanel v-else />
        
    </main>
</template>
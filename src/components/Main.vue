<script setup>
import StartPanel from '@/components/StartPanel.vue';
import { useGeneralStore } from '@/stores/GeneralStore';
import Game from './Game.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';

const generalStore = useGeneralStore()


</script>

<template>
    <main class="bg-gray-100 min-h-svh p-0">
        <Header/>
        <Game v-if="generalStore.gameRunning" />
        <StartPanel v-else />
        <Footer/>
    </main>
</template>
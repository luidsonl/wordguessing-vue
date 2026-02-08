<script setup>
import Board from './Board.vue';
import GameMessage from './GameMessage.vue';
import Keyboard from './Keyboard.vue';

import { useGeneralStore } from '@/stores/GeneralStore';

const generalStore = useGeneralStore();

</script>

<template>
    <GameMessage 
      v-if="generalStore.message.message" 
      :message="generalStore.message.message" 
      :color="generalStore.message.color" 
    />
    <Board/>
    <Keyboard/>
</template>

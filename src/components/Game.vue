<script setup>
import Board from './Board.vue';
import GameMessage from './GameMessage.vue';
import GameOver from './GameOver.vue';
import Keyboard from './Keyboard.vue';

import { useGeneralStore } from '@/stores/GeneralStore';
import { useWordStore } from '@/stores/WordStore';

const generalStore = useGeneralStore();
const wordStore = useWordStore();

</script>

<template>
  <div>
    <div class="min-h-20">
      <GameMessage 
      v-if="generalStore.message.message" 
      :message="generalStore.message.message" 
      :color="generalStore.message.color" 
    />
    </div>
    <Board/>
    <GameOver v-if="generalStore.gameOver"/>
    <Keyboard v-else/>
  </div>
  
    
</template>

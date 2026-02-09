<script setup>
import { useGeneralStore } from '@/stores/GeneralStore';
import { useWordStore } from '@/stores/WordStore';

const wordStore = useWordStore();
const generalStore = useGeneralStore()

async function startGame() {
    generalStore.startGame();
    generalStore.updateMessage('Getting data', 'blue')
    const word = await wordStore.newWordWithLength(generalStore.boardWidth);
    generalStore.updateSecretWord(word);
    if(!word){
        generalStore.stopGame();
    }
    generalStore.clearMessage();
}

</script>

<template>
    <div class="flex justify-center">
         <button class="cursor-pointer px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors cursor" v-on:click="startGame">
            Start
        </button>
    </div>
   
</template>
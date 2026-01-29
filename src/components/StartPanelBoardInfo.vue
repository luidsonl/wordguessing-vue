<script setup>
import { GeneralStore } from '@/stores/GeneralStore';

const generalStore = GeneralStore()
</script>

<template>
    <div class="text-lg font-semibold">
        Word lenght: {{ generalStore.getBoardWidth }} |
        Tries: {{generalStore.getBoardHeight}}
      
    </div>
</template>
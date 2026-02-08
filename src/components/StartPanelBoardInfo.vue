<script setup>
import { useGeneralStore } from '@/stores/GeneralStore';

const generalStore = useGeneralStore()
</script>

<template>
    <div class="text-lg font-semibold">
        Word lenght: {{ generalStore.boardWidth }} |
        Tries: {{generalStore.boardHeight}}
      
    </div>
</template>
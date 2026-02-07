<script setup>
import { useGeneralStore } from '@/stores/GeneralStore';

const generalStore = useGeneralStore()
</script>

<template>
    <div class="text-lg font-semibold">
        Word lenght: {{ generalStore.getBoardWidth }} |
        Tries: {{generalStore.getBoardHeight}}
      
    </div>
</template>
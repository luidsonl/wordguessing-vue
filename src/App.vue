<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import { useWordStore } from './stores/WordStore';

import { ref } from 'vue';

const wordStore = useWordStore();
wordStore.newWordWithLength(5);


</script>

<template>
  <div>{{ wordStore.getWord }}</div>
  <Header/>
  <Main/>
  <Footer/>
</template>

<style scoped>

</style>

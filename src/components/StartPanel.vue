<script setup>
import StartPanelBoard from '@/components/StartPanelBoard.vue';
import StartPanelBoardInfo from '@/components/StartPanelBoardInfo.vue';
import StartButton from '@/components/StartButton.vue';

</script>

<template>
    <div class="w-full max-w-3xl mx-auto p-4 border border-gray-300 rounded bg-white">
        <h1 class="text-2xl text-center">Board dimensions</h1>
        <table class="w-full table-fixed border-collapse">
            <StartPanelBoard/>
            <StartPanelBoardInfo/>
            <StartButton/>
        </table>


    </div>
</template>

<script setup>
import { useGeneralStore } from '@/stores/GeneralStore'
import { useWordStore } from '@/stores/WordStore'
import { storeToRefs } from 'pinia'

const generalStore = useGeneralStore()
const wordStore = useWordStore()

const { currentWord, wordsTried, boardWidth, boardHeight } = storeToRefs(generalStore)

const keyRows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL'],
]

function handleKey(key) {
    generalStore.clearMessage()

    if (boardHeight.value < wordsTried.value.length) {
        console.error('No more tries')
        return
    }

    if (key === 'ENTER') {
        submitWord()
    } else if (key === 'DEL') {
        removeLetter()
    } else {
        addLetter(key)
    }
}

function addLetter(letter) {
    if (currentWord.value.length < boardWidth.value) {
        generalStore.updateCurrentWord(currentWord.value + letter.toLowerCase())
    }
}

function removeLetter() {
    generalStore.updateCurrentWord(currentWord.value.slice(0, -1))
}

async function submitWord() {
    if (currentWord.value.length !== boardWidth.value) {
        generalStore.updateMessage('Word too short', 'red')
        return
    }

    if (wordsTried.value.includes(currentWord.value)) {
        generalStore.updateMessage('Word already used', 'red')
        return
    }

    const valid = await wordStore.isValidWord(currentWord.value)
    if (!valid) {
        generalStore.updateMessage('Invalid word', 'red')
        return
    }

    generalStore.addWordTried(currentWord.value)

    if (currentWord.value === generalStore.secretWord) {
        generalStore.updateMessage('You won!', 'green')
    }

    generalStore.updateCurrentWord('')
}
</script>

<template>
    <div class="flex flex-col justify-center items-center text-2xl mb:text-lg">
        <div v-for="row in keyRows" :key="row.join('')">
            <button v-for="key in row" :key="key" @click="handleKey(key)" class="border rounded-b-sm m-1 p-1 bg-white active:bg-gray-300">
                {{ key }}
            </button>
        </div>
    </div>
</template>

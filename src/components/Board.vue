<script setup>
import { useGeneralStore } from '@/stores/GeneralStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const generalStore = useGeneralStore()

const { currentWord, wordsTried, boardWidth, boardHeight, secretWord } = storeToRefs(generalStore)

const currentLine = computed(() => wordsTried.value.length)

const getLetterClass = (letter, rowIndex, colIndex) => {
    if (!letter) return ''

    const secret = secretWord.value?.toUpperCase()
    const upperLetter = letter.toUpperCase()

    if (!secret) return ''

    if (secret[colIndex] === upperLetter) {
        return 'bg-green-500 text-white'
    }

    if (secret.includes(upperLetter)) {
        return 'bg-yellow-400 text-white'
    }

    return 'bg-gray-200'
}

const letterSizeClass = computed(() => {
    const w = boardWidth.value

    if (w <= 4) return 'text-3xl'
    if (w <= 6) return 'text-2xl'
    if (w <= 8) return 'text-xl'
    if (w <= 10) return 'text-lg'
    return 'text-sm'
})
</script>

<template>
    <div class="flex justify-center px-2">
        <div class="border p-2 rounded bg-white w-full max-w-screen-sm sm:max-w-md md:max-w-lg mb-5">
            <div v-for="i in boardHeight" :key="i" class="grid gap-2" :style="`grid-template-columns: repeat(${boardWidth}, minmax(0, 1fr))`">
                <div
                    v-for="j in boardWidth"
                    :key="j"
                    class="aspect-square border-b border-b-black flex items-end justify-center font-bold"
                    :class="(getLetterClass(wordsTried[i - 1]?.[j - 1], i - 1, j - 1), letterSizeClass)"
                >
                    <span v-if="wordsTried[i - 1]?.[j - 1]">
                        {{ wordsTried[i - 1][j - 1]?.toUpperCase() }}
                    </span>

                    <span v-else-if="currentLine === i - 1">
                        {{ currentWord[j - 1]?.toUpperCase() ?? '' }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

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
        return 'bg-green-500 text-white border-transparent'
    }

    if (secret.includes(upperLetter)) {
        return 'bg-yellow-400 text-white border-transparent'
    }

    return 'bg-gray-200 text-gray-500 border-transparent'
}

const letterSizeClass = computed(() => {
    const w = boardWidth.value

    if (w <= 4) return 'text-2xl sm:text-3xl md:text-4xl'
    if (w <= 6) return 'text-2xl sm:text-3xl md:text-4xl'
    if (w <= 8) return 'text-xl sm:text-2xl md:text-3xl'
    if (w <= 10) return 'text-lg sm:text-xl md:text-2xl'
    return 'text-sm sm:text-lg md:text-xl'
})
</script>

<template>
    <div class="flex justify-center px-2 w-full">
        <div class="border p-2 rounded bg-white w-full max-w-sm sm:max-w-md md:max-w-lg mb-5 shadow-sm">
            <div v-for="i in boardHeight" :key="`row-${i}`" class="grid gap-2 mb-2" :style="{ gridTemplateColumns: `repeat(${boardWidth}, minmax(0, 1fr))` }">
                <div
                    v-for="j in boardWidth"
                    :key="`col-${j}`"
                    class="aspect-square border-b-2 border-b-black flex items-end justify-center font-bold pb-1 transition-colors duration-500"
                    :class="[getLetterClass(wordsTried[i - 1]?.[j - 1], i - 1, j - 1), letterSizeClass, !wordsTried[i - 1]?.[j - 1] ? 'border-b-black' : '']"
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

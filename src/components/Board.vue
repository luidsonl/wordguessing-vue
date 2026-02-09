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
</script>


<template>

    <div class="border p-2 rounded max-w-md mx-auto bg-white text-2xl">
        <div v-for="i in boardHeight" :key="i" class="mx-auto flex justify-center">
            <div
                v-for="j in boardWidth"
                :key="j"
                class="w-20 h-20 border-b mx-2 flex items-end justify-center"
                :class="getLetterClass(wordsTried[i - 1]?.[j - 1], i - 1, j - 1)"
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


</template>

import { defineStore } from 'pinia'

export const useWordStore = defineStore('word', {
    state() {
        return {
            isLoading: false,
            error: null,
        }
    },

    actions: {
        async fetchWord(url) {
            this.isLoading = true
            this.error = null
            try {
                const response = await fetch(url)
                const data = await response.json()

                if (data.length > 0) {
                    const randomIndex = Math.floor(Math.random() * data.length)
                    return data[randomIndex].word
                } else {
                    return false
                }
            } catch (err) {
                this.error = 'Erro ao buscar palavra'
                console.error(err)
            } finally {
                this.isLoading = false
            }
        },

        async newWordWithLength(length) {
            const pattern = '?'.repeat(length)
            const url = `https://api.datamuse.com/words?sp=${pattern}`
            const word = await this.fetchWord(url)
            return word
        },

        async newWordWithLengthSimilar(length, similar) {
            const pattern = '?'.repeat(length)
            const url = `https://api.datamuse.com/words?ml=${similar}&sp=${pattern}`
            await this.fetchWord(url)
        },

        async isValidWord(word) {
            this.isLoading = true
            this.error = null
            try {
                const response = await fetch(`https://api.datamuse.com/words?sp=${word}&max=1`)
                const data = await response.json()

                if (data.length > 0 && data[0].word.toLowerCase() === word.toLowerCase()) {
                    return true
                } else {
                    return false
                }
            } catch (error) {
                console.error('Error requesting api:', error)
            } finally {
                this.isLoading = false
            }
        },
    },
})

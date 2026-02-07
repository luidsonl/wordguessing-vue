import { defineStore } from 'pinia'

export const useWordStore = defineStore('word', {
    state() {
        return {
            value: '',
            isLoading: false,
            error: null
        }
    },

    actions: {
        async fetchWord(url) {
            this.isLoading = true;
            this.error = null;
            try {
                const response = await fetch(url);
                const data = await response.json();

                if (data.length > 0) {
                    const randomIndex = Math.floor(Math.random() * data.length);
                    this.value = data[randomIndex].word;
                } else {
                    this.value = '';
                }
            } catch (err) {
                this.error = "Erro ao buscar palavra";
                console.error(err);
            } finally {
                this.isLoading = false;
            }
        },

        async newWordWithLength(length) {
            const pattern = '?'.repeat(length);
            const url = `https://api.datamuse.com/words?sp=${pattern}`;
            await this.fetchWord(url);
        },

        async newWordWithLengthSimilar(length, similar) {
            const pattern = '?'.repeat(length);
            const url = `https://api.datamuse.com/words?ml=${similar}&sp=${pattern}`;
            await this.fetchWord(url);
        },
        
        clearWord() {
            this.value = '';
        }
    },

    getters: {
        getWord: (state) => state.value
    }
})
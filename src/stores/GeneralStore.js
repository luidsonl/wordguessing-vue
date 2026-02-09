import { defineStore } from "pinia";

export const useGeneralStore = defineStore('general', {
    state() {
        return {
            gameRunning: false,
            boardWidth: 5,
            boardHeight: 5,
            currentWord: '',
            secretWord: '',
            wordsTried: [],
            message: {}
        }
    },

    actions: {
        startGame() {
            this.gameRunning = true;
        },

        stopGame() {
            this.gameRunning = false;
        },

        setBoardDimensions(width, heigth) {
            if (width < 3 && heigth >= 1) {
                return false;
            }
            this.boardWidth = width;
            this.boardHeight = heigth;
            return true;
        },
        resetPanel() {
            this.boardWidth = 5;
            this.boardHeight = 5;
        },
        updateCurrentWord(word) {
            this.currentWord = word.toLowerCase();
        },

        updateSecretWord(word) {
            this.secretWord = word.toLowerCase()
        },

        addWordTried(word) {
            this.wordsTried = [...this.wordsTried, word.toLowerCase()];
        },

        updateMessage(message, color) {
            this.message = { message, color }
        },

        clearMessage() {
            this.message = {}
        },

        reset(){
            this.stopGame()
            this.resetPanel(),
            this.updateCurrentWord('')
            this.updateMessage({})
            this.updateSecretWord('')
            this.wordsTried = []
        }
    },

    getters:{
        isWinner: (state)=>{
            return state.wordsTried.includes(state.secretWord)
        },
        gameOver: (state)=>{
            if(!state.wordsTried) return false;
            return state.wordsTried.length >= state.boardHeight || state.wordsTried.includes(state.secretWord);
        }
    }
})
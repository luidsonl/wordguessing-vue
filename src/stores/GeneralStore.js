import { defineStore } from "pinia";

export const useGeneralStore = defineStore('general', {
    state() {
        return {
            gameRunning: false,
            gameWon: false,
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
            this.currentWord = word
        },

        updateSecretWord(word) {
            this.secretWord = word
        },

        addWordTried(word) {
            this.wordsTried.push(word)
        },

        updateMessage(message, color) {
            this.message = { message, color }
        },

        clearMessage() {
            this.message = {}
        }
    }
})
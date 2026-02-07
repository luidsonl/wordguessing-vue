import { defineStore } from "pinia";

export const useGeneralStore = defineStore('general',{
    state(){
        return {
            gameRunning: false,
            boardWidth: 5,
            boardHeight: 5
        }
    },

    actions: {
        startGame(){
            this.gameRunning = true;
        },

        stopGame(){
            this.gameRunning = false;
        },

        setBoardDimensions(width, heigth){
            if(width < 3 && heigth >= 1){
                return false;
            }
            this.boardWidth = width;
            this.boardHeight = heigth;
            return true;
        },
        resetPanel(){
            this.boardWidth = 5;
            this.boardHeight = 5;
        }
    },

    getters:{
        getShowStartPanel: (state) => state.startPanel,
        getBoardWidth: (state)=> state.boardWidth,
        getBoardHeight: (state)=> state.boardHeight
    }
})
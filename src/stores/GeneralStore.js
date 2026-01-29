import { defineStore } from "pinia";

export const GeneralStore = defineStore('general',{
    state(){
        return {
            startPanel: true,
            boardWidth: 5,
            boardHeight: 5
        }
    },

    actions: {
        setFalseStartPanel(){
            this.startPanel = false;
        },

        setTrueStartPanel(){
            this.startPanel = true;
        },

        setBoardDimensions(width, heigth){
            if(width < 3 && heigth >= 1){
                return false;
            }
            this.boardWidth = width;
            this.boardHeight = heigth;
            return true;
        }
    },

    getters:{
        getShowStartPanel: (state) => state.startPanel
    }
})
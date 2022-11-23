import GameManager from "./game-manager";

export default class Arena{
    constructor(){
        this.columns= GameManager.config.columns;
        this.lines= GameManager.config.lines;
    }
}
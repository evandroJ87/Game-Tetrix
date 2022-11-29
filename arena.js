import GameManager from "./game-manager.js";

export default class Arena{
    constructor(){
        this.columns= GameManager.config.columns;
        this.lines= GameManager.config.lines;
        this.width=this.columns * GameManager.config.squareSize;
        this.height=this.lines  * GameManager.config.squareSize;
        this.position={
            top: (GameManager.height  - this._height) / 2,
            left: (GameManager.width  - this._width) / 2
        }
    }

    draw(){
    this._drawBorder();
    //_drawGrid
    //_drawSquare
}

    _drawBorder() {
        GameManager.context.strokeStyle="#000000";
        GameManager.context.strokeRect(
            this.position.left,
            this.position.top,
            this._width,
            this._height
        );
    }


}
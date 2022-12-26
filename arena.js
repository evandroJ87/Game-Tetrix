import GameManager from "./game-manager.js";

export default class Arena{
    constructor(){
        this._columns= GameManager.config.columns;
        this._lines= GameManager.config.lines;
        this._width=this._columns * GameManager.config.squareSize;
        this._height=this._lines  * GameManager.config.squareSize;
        this.position={
            top: (GameManager.config.height  - this._height) / 2,
            left: (GameManager.config.width  - this._width) / 2
        }
    }

    draw(){
    this._drawBorder();
    this._drawGrid();
    //_drawSquare
}
    //Método responsável por desenhar a borda do Game
    _drawBorder() {
        GameManager.context.strokeStyle="#000000";
        GameManager.context.strokeRect(
            this.position.left,
            this.position.top,
            this._width,
            this._height
        );
    }

    //Métodos responsável por desenhar a grade atrás do Game
    _drawGrid(){
        GameManager.context.strokeStyle="#dedede";
        GameManager.context.beginPath();
        for (let i=1; i < this._lines; i++){
            GameManager.context.moveTo(this.position.left, this.position.top + GameManager.config.squareSize* i);
            GameManager.context.lineTo(this.position.left + this._width, this.position.top + GameManager.config.squareSize * i);
        }
        for (let i=1; i < this._columns; i++){
            GameManager.context.moveTo(this.position.left + GameManager.config.squareSize * i, this.position.top);
            GameManager.context.lineTo(this.position.left + GameManager.config.squareSize * i, this.position.top + this._height);
        }
        GameManager.context.stroke();
        }
        


}
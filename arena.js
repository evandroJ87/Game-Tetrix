import GameManager from "./game-manager.js";
import Polyomino from "./polyomino.js";
import Square from "./square.js";

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
        this._squares=[...Array(this._columns)].map(()=>[...Array(this._lines)]);

        this.currentPiece=new Polyomino(
            4,
            "#aedc11",
            [
                [0, 0, 0, 0],
                [0, 1, 1, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0]
            ]
        )
    }

    draw(){
    this._drawBorder();
    this._drawGrid();
    this._drawSquare();
    this.currentPiece.draw(3 , 6);
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
    _drawGrid() {
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

        _drawSquare() {
            for (let i=0; i < this._columns; i++) {
                for (let j=0; j<this._lines; j++) {   
                    if (this._squares[i][j]){
                    this._squares[i][j].draw(
                        this.position.left + i * GameManager.config.squareSize,
                        this.position.top + j * GameManager.config.squareSize)
                    }
                }
            }
        }
}
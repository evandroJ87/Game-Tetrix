import GameManager from "./game-manager.js"
import Square from "./square.js";


export default class Polyomino{
    constructor(squaresCount, color, format){
        this.color= color;
        this._squaresCount= squaresCount;
        this._initializeSquares(format)
    }
        
    _initializeSquares(format){
        this._squares= [...Array(this._squaresCount)].map(()=>[...Array(this._squaresCount)]);
        for (let i=0; i < this._squaresCount; i++) {
            for (let j=0; j<this._squaresCount; j++) {   
                if (format[i][j]){
                    this._squares[i][j]= new Square(this.color);
                }
            }
        }
    }

    draw (x, y){
        for (let i=0; i < this._squaresCount; i++) {
            for (let j=0; j<this._squaresCount; j++) {   
                if (this._squares[j][i]){
                    this._squares[j][i].draw(
                        GameManager.arena.position.left + (x+i) * GameManager.config.squareSize,
                        GameManager.arena.position.top + (y+j) * GameManager.config.squareSize
                    );
                }
            }
        }
    }
}
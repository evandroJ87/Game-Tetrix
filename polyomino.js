
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

    }
}
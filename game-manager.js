import Arena from "./arena.js";

export default class GameManager{
    static start(config){
        GameManager.config=config;
       window.addEventListener("load", GameManager._init);
    }
    static _init(){
        let canvas=document.getElementById("canvas");
        canvas.width=GameManager.config.width;
        canvas.height=GameManager.config.height;

        GameManager.context= canvas.getContext("2d"); //CONTEXTO SERVE PARA DESENHAR  AS FORMAS GEOMÉTRICAS NO GAME
        GameManager.arena= new Arena();

        GameManager._draw();
    }

    //MÉTODO RESPONSÁVEL  POR DESENHAR O JOGO:

    static _draw(){
        GameManager.arena.draw();

        requestAnimationFrame(GameManager._draw);
    }
}
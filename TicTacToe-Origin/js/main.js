import Game from "./Game.js";
import Board from "./Board.js";
import Header from "./Header.js";

let game = new Game();
let AI_game = new Game();
let board = new Board(document.getElementById("board"));
let header = new Header(document.getElementById("header"));

// define functions
var avaliableMoves = AI_game.avaliableMoves();
board.onTileClick = function (i) {
    game.makeMove(i);
    var avaliableMoves = game.avaliableMoves();
    var AI_dic = game.reduction(avaliableMoves,game.history.length-1);
    //console.log(AI_dic);

    try{
        var AI_moves = Object.keys(AI_dic).reduce(function(a, b){ return AI_dic[a] > AI_dic[b] ? a : b });
        game.makeMove(AI_moves);
    }catch(e){
        game.makeMove(game.avaliableMoves()[0]);
    }
    update(game);
};

header.onRestartClick = function () {
    game = new Game();
    AI_game = new Game();
    update(game);
};
update(game);

 function update(game) {
    board.update(game);
    header.update(game);
 };

//console.log(reduction([0,1,2,3]));
console.log(reduction([0,1,2,3]));
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

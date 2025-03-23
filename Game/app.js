let gameSeq = [];
let userSeq = [];

let started = false; // tells if the game started or not
let level = 0;

document.addEventListener("keypress", function(){
    // console.log("Game Started");
    if(started == false){
        console.log("Game Started");
        started = true;
    }
});
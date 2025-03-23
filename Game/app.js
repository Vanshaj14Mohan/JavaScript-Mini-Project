let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];

let started = false; // tells if the game started or not
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    // console.log("Game Started");
    if(started == false){
        console.log("Game Started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){ //after one second remove that flash
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){ //after one second remove that flash
        btn.classList.remove("userFlash");
    }, 250);
}


function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    console.log("Random index", randIdx);
    let randCol = btns[randIdx]; //choosing random color
    console.log("Random Color", randCol);
    let randBtn = document.querySelector(`.${randCol}`);
    console.log("Random button", randBtn);
    gameFlash(randBtn); //random button choose
}

function btnPress(){
    // console.log("Button was pressed");
    console.log(this);
    let btn = this;
    userFlash(btn);
}

let allBtns = document.querySelectorAll(".btns");

for(btn of allBtns){
  btn.addEventListener("click", btnPress);
}
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

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){ //after one second remove that flash
        btn.classList.remove("flash");
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
    btnFlash(randBtn); //rabdom button choose
}


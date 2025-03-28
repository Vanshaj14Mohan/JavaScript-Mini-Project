let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];

let started = false; //tells if the game started or not
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

function gameFlash(btn){ //Creating flash done by the game
    btn.classList.add("flash");
    setTimeout(function(){ //after one second remove that flash
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){ //function to check for user
    btn.classList.add("userFlash");
    setTimeout(function(){ //after one second remove that flash
        btn.classList.remove("userFlash");
    }, 250);
}


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    // console.log("Random index", randIdx);
    let randCol = btns[randIdx]; //choosing random color
    // console.log("Random Color", randCol);
    let randBtn = document.querySelector(`.${randCol}`);
    // console.log("Random button", randBtn);
    gameSeq.push(randCol);
    console.log(gameSeq);
    gameFlash(randBtn); //random button choose
}

function checkSeq(idx){ //to check our current level.
    // console.log("Current Level:", level);   
    // let idx = level - 1;
    if(userSeq[idx] === gameSeq[idx]){
        //console.log("Same Value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        //h2.innerText = `Game Over! Press any key to start`;
        h2.innerHTML = `Game Over! Your score was <b>${level} </b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress(){ //function to handle button press
    // console.log("Button was pressed");
    // console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkSeq(userSeq.length-1);  
}

let allBtns = document.querySelectorAll(".btns"); //getting all buttons

for(btn of allBtns){
  btn.addEventListener("click", btnPress);
}

//Function to restart the game
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "green", "purple"];
let h3=document.querySelector("h3");
let hs=0;

let level = 0;
let started = false;

let h2 = document.querySelector("h2");
let allbtns = document.querySelectorAll(".btn");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game Started");
        started = true;
    }
    levelup();
});



function levelup() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let randIx = Math.floor(Math.random() * 4);
    let randColor = btns[randIx];
    let randbtn = document.querySelector(`.${randColor}`);
    btnflash(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);

}

function check(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (gameSeq.length == userSeq.length) {
            setTimeout(levelup,1000)
        }
    }else{
        reset();
    }

}

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100);
}
function btnPress() {
    let btn = this;
    btnflash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    check(userSeq.length-1);
}

for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    h2.innerHTML=`Game Over! Your Score Is <b> ${level-1}</b> <br>Press any key to restart the game`;
    if((level -1)>hs){
        hs=level-1;
    }
    h3.innerHTML=`High Score: ${hs}`;
    level=0;
    gameSeq=[];
    userSeq=[];
    started=false;
    let b = document.querySelector("body");
    b.classList.add("over");
    setTimeout(function(){
        b.classList.remove("over");
    },150)
}
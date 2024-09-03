let gameSeq=[];
let userSeq=[];

let btns = ["red", "yellow", "perpal", "perpal"];



let started = false;
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress", function(){
    // console.log("Game Started");
    if (started == false) {
        console.log("Game Started");
        started = true;

        levelUp();
    }
});


function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout( function() {
        btn.classList.remove ("flash");
    }, 200);
}



function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout( function() {
        btn.classList.remove ("userflash");
    }, 200);
}



function levelUp() {
    userSeq = [];
    level++;
    h2.innerText =  `level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}


function checkAns(indx) {
    // console.log("curren level : ", level);
    // let indx = level-1;

    if (userSeq[indx]=== gameSeq[indx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerHTML =  `Game Over! Your Score was  <b>${level}</b> <br> press any key to play.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function() {
            document.querySelector("body").style.backgroundColor = "#34e5eb";
        }, 200);
        reset();
    }
}


function btnPress() {
    let btn = this
    // console.log(this);
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn) {
    btn.addEventListener("click",btnPress);
}


function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
// Declaring the Variables 

var timer = 60;
var score = 0;
var hitnum = 0;
// Decalaring the fucns

function increaseScore(){
    score +=10;
    document.querySelector("#scoreVal").textContent = score;
}
function makeBubble(){
    var clutter = ""
    for(var i =1 ; i<201 ; i++){
       var rn =  Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>` ; 
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function getNewHit(){
    hitnum= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitnum;
}

function runTimmer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".timerval").textContent = timer;
        }
        else{
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over!<h1>`;
            clearInterval(timerint);
        }
    },1000)
    
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickednum = (Number(dets.target.textContent));
    if(clickednum === hitnum){
        increaseScore();
        makeBubble()
        getNewHit()
    }
})
// Calling the Funcs

runTimmer();
makeBubble();
getNewHit();
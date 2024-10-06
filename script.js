var timer = 30;
var score = 0;
var hitrn;
function getNewHit()
{
    hitrn = Math.floor(Math.random()*10); 
    document.querySelector("#hitval").textContent= hitrn;
}

function makeBubble(){
    var clutter="";
for(var i=1;i<=133;i++){
    var rn =Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function () {
        if(timer > 0)
        {
            timer--;
            document.querySelector("#timerval").textContent = `${timer} Sec`;
        }
        else{
            // clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over!</h1>`;
            document.querySelector("#hitval").textContent= "Stop!";
            document.querySelector("#timerval").textContent = "Time's Up";
            document.querySelector("#scoreval").textContent= `(Final) - ${score}`;

        }
    },1000);
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent= score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
var clickednum = Number(dets.target.textContent);
if(clickednum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
}
});

runTimer();
makeBubble();
getNewHit();

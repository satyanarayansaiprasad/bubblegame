var timer = 60;
var score = 0;
var hitingRn;

function createBubble(){
    var newBubble = "";

for(var i = 0; i<= 111; i++){
    var randomNumbers = Math.floor(Math.random()*10);
    newBubble += '<div class="bubble">'+ randomNumbers +'</div>';
}

document.querySelector("#childBoxBtmBar").innerHTML = newBubble;
}

function runTimer(){
    var timeing = setInterval(function(){
        if(timer> 0){
            timer-- ;
            document.querySelector("#timing").textContent = timer;
        }
        else{
            clearInterval(timeing);
            document.querySelector("#childBoxBtmBar").innerHTML = "<h1>Game over</h1> <a id='restart' href='index.html'> Restart </a>";
        }
        
    }, 1000);
}

function getNewHit(){
    hitingRn = Math.floor(Math.random()*10);
    document.querySelector("#hiting").textContent = hitingRn;
}

function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent = score;
}

document.querySelector("#childBoxBtmBar").addEventListener("click", function(details){
    var readNumber = Number(details.target.textContent);
    if(readNumber === hitingRn){
        increaseScore();
        createBubble();
        getNewHit();
        
    }
});


runTimer();
createBubble();
getNewHit();
let time = 20;
let score = 0;
let timeval;
let pause = false;
let start = false;

function fillCircles(){
    let temp = ``;
    for(var i = 0 ; i< 192 ; i++){
        temp += `<div class="circle">${Math.floor(Math.random()*10)}</div>`;
    }
    document.querySelector("#box_btm").innerHTML = temp;
}

function timer(){
    if(!start){
        start = true;
        timeval = setInterval(() => {
            if(time > 0){
                time--;
                document.querySelector("#timer").textContent = time;
                
            }
            else{
                clearInterval(timeval);
                document.querySelector("#box_btm").innerHTML = `<div>
                <h1 style="color:white;">Game Over</h1>
                <br> 
                <h3> Your Score : ${document.querySelector("#scoreVal").textContent}</h3>
                </div>`;
                start = false;
            }
        }, 1000);
    }
    if(start && pause){
        pause = false;
        start = true;
        timeval = setInterval(() => {
            if(time > 0){
                time--;
                document.querySelector("#timer").textContent = time;
                
            }
            else{
                clearInterval(timeval);
                document.querySelector("#box_btm").innerHTML = `<div>
                <h1 style="color:white;">Game Over</h1>
                <br>
                <h3> Your Score : ${document.querySelector("#scoreVal").textContent}</h3>
                </div>`;
                start = false;
            }
        }, 1000);
    }

}


function randomHit(){
    document.querySelector("#hitVal").textContent = Math.floor(Math.random()*10);
}


document.querySelector("#box_btm").addEventListener("click" , (x)=>{
    let tar = x.target;
    
    if(time>0){
        if(pause !== true && start === true && time > 0 && (tar.textContent) === document.querySelector("#hitVal").textContent){
            score++;
            document.querySelector("#scoreVal").textContent = score; 
        }
        fillCircles();
        randomHit();
    }
})

document.querySelector("#start_btn").addEventListener("click" , ()=>{
    timer();
});

document.querySelector("#pause_btn").addEventListener("click" , ()=>{
    if(start === true){
        clearInterval(timeval);
        pause = true;
    }
})

document.querySelector("#restart_btn").addEventListener("click" , ()=>{
    randomHit();
    fillCircles();
    clearInterval(timeval);
    time = 20;
    document.querySelector("#timer").textContent = time;
    score = 0;
    document.querySelector("#scoreVal").textContent = score;
    start = false;
    pause = false;
})

fillCircles();
randomHit();
prompt("hello world");
var sec = prompt("enter second");
var hour = prompt("enter hour");  
var min = prompt("enter min");
var timer;

var secval = document.getElementById("sec");
var minval = document.getElementById("min");
var hourval = document.getElementById("hour");

function render(){
    secval.innerHTML = sec;
    minval.innerHTML = min;
    hourval.innerHTML = hour;
}

function work(){
    sec--;
    
    if(sec<= 0){
min--;
sec = 60;

if(min==0){
hour--;
min = 60;
}
    }
if(hour == 0){
    if(min == 0){
        if(sec == 0){
            stop();
        }
    }
}
    render();
}
function start(){
     timer = setInterval(
        function(){
            work();
        }
   , 1000 ) 
    }

    function stop (){
        hour = 0;
        if(hour = 0) {
hour = 00;
if(min== 0)
{
min =00;
if(sec ==0){
    sec ==00;
}
}
        }
    }
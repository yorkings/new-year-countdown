const newyear= new Date(2024,0,1,0,0,0);
var dayinp =document.getElementById("day"); 
var hourinp =document.getElementById("hour"); 
var mininp =document.getElementById("min"); 
var secinp =document.getElementById("sec"); 

var twozero= (value)=>{
   return  value < 10 ? "0"+value : value;
};
function countdownTimer(){
    if (countdown <= 0) {
        clearInterval(interval);
        dayinp.innerHTML = "00";
        hourinp.innerHTML = "00";
        mininp.innerHTML = "00";
        secinp.innerHTML = "00";
        return;
      }
    var today=new Date();
    var countdown=newyear - today;
    var seconds=1000;
    var min=seconds*60;
    var hour=min*60;
    var day=hour*24;
    var d= Math.floor(countdown/(day));
    var h=Math.floor((countdown%(day)) /hour);
    var m=Math.floor((countdown%(hour)) /min);
    var s=Math.floor((countdown%(min)) /seconds);

    dayinp.innerHTML=twozero(d);
    hourinp.innerHTML= twozero(h);
    mininp.innerHTML=twozero(m);
    secinp.innerHTML=twozero(s);
} 

var interval =setInterval(countdownTimer, 1000);
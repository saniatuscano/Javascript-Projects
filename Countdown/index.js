const daysEl= document.getElementById("days")
const hoursEl= document.getElementById("hours")
const minsEl= document.getElementById("mins")
const secondsEl= document.getElementById("seconds")
const christmas="25 Dec 2022";
function countdown(){
    const christmasDate=new Date(christmas);
    const currentDate= new Date();
    const diff=christmasDate - currentDate;
    const totalSeconds=diff/1000;
    const days=Math.floor(totalSeconds /3600 /24);
    const hours=Math.floor(totalSeconds/3600) % 24;
    const mins=Math.floor(totalSeconds/60) % 60;
    const seconds=Math.floor(totalSeconds)%60;
    

    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;
    minsEl.innerHTML=mins;
    secondsEl.innerHTML=seconds;
}
setInterval(countdown,1000)
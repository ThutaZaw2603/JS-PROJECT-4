// setting second
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setTime(){
    const date = new Date();
    const seconds = date.getSeconds();
    let secondsDegree = (seconds/60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
   
   secondHand.style.background = 'blue';

   const minutes = date.getMinutes();
   const minuteDegree = (minutes/60)*360 +90;
  
   minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
   minuteHand.style.background = 'green';

   const hours = date.getHours();
   const hourDegree = (hours/12)*360 +90;
   
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
   hourHand.style.background = 'red';
   

}setInterval(setTime,1000);


let hourDigi = document.querySelector('.hourDigi');
let minDigi = document.querySelector('.minDigi');
let secDigi = document.querySelector('.secDigi');

function setDate(){
    let currentTime = new Date();
    let sec = currentTime.getSeconds();
   secDigi.innerText = sec;
 
   let min = currentTime.getMinutes();
   minDigi.innerText = min;

   let hr = currentTime.getHours();
   hourDigi.innerText = hr;
    
   
}
setInterval(setDate,1000);

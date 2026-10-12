const hour = document.querySelector("#hours")
const minute= document.querySelector("#minutes")
const second = document.querySelector("#seconds")
let ampm = document.querySelector("#ampms")

console.log(ampm);

function updateClock (){
  let data = new Date();
 let hours = data.getHours();
 let minutes = data.getMinutes();
 let seconds = data.getSeconds();
if (hours > 12) {
    ampm.textContent = "PM";
} 

if ( hours > 12){
   hours = hours - 12 ;
}
if (hours === 0 ){
  hours = 12 ; 
}

if (hours < 10 ){
  hours = "0"+hours; 
}

if (minutes < 10 ){
  minutes = "0"+minutes; 

}
if (seconds < 10 ){
  seconds = "0"+seconds; 
}

minute.textContent =minutes
second.textContent = seconds
hour.textContent = hours

}
setInterval(updateClock, 1000);

 updateClock()





function main(){
 const durationContainers = Array.from(document.getElementById("items").getElementsByClassName("style-scope ytd-thumbnail-overlay-time-status-renderer"));
 var durations = durationContainers.map(__span => __span.innerText).map(duration => {
   if (duration) {
     return duration.split(":").map(duration => parseInt(duration)).reverse().reduce((acc, e, i) => {
       return acc + e * Math.pow(60, i);
     });
   }
   else {
     return 0;
   }
 });
 durations = durations.filter(element => 0 !== element);
 console.log(durations);
 const totalSeconds = durations.reduce((acc, e, _) => {
   return acc + e;
 });
 console.log(totalSeconds);
 

 const seconds = totalSeconds % 60;
 const minutes = Math.floor(totalSeconds / 60) % 60;
 const hours = Math.floor(totalSeconds / 3600);
 const totalTime = "Play Time: " + hours + ":" + minutes + ":" + seconds;

 console.log(totalTime);

 const list = document.getElementById("start-actions");
 const div = document.createElement("div");
 div.class = "style-scope style-grey-text";
 const text = document.createElement("p");
 text.innerText = totalTime;
 div.appendChild(text);
 
 list.insertBefore(div, list.childNodes[1]);
};
main();

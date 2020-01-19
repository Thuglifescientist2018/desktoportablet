var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var resetButton = document.querySelector("#reset");
var maxScoreInput = document.querySelector("#max");
var coin = document.querySelector("#coin");
var coinIcon = document.querySelectorAll("i")[0];
var game_instruction = document.querySelector("#game_instruction");
var p1score = 0;
var p2score = 0;
var gameover = false;
var winscore = 5;
var icons = ["fa fa-desktop", "fa fa-tablet"];
var coinEvents = ["click", "dblclick"];


for(i=0; i<coinEvents.length; i++){
coin.addEventListener(coinEvents[i], function(event){
  if(!gameover){
  if(event.type === "click") {
  this.style.animationName = 'toss';
  coinIcon.setAttribute("class", "fa fa-chevron-down");
  coinIcon.style.animationName = "toss";

}else if(event.type = "dblclick") {
  var randomIcon = Math.floor(Math.random()*icons.length);
  this.style.animationName = "";
  coinIcon.setAttribute("class", icons[randomIcon]);
  if(coinIcon.getAttribute("class") === icons[0]){
    p1score ++;
    p1display.textContent = p1score;
    if(p1score === winscore){
      var x = document.createElement("div");
      x.setAttribute("class", "splashscreen")
      x.classList.add("splashscreen");
      document.body.appendChild(x);
      var congrats = document.createElement("h1");
      congrats.setAttribute("class", "congrats");
      congrats.innerHTML = "Congrats <i class='fa fa-desktop'></i>" ;
      var xel = document.querySelector(".splashscreen");
      xel.appendChild(congrats);
      gameover = true;
    }
  }else if(coinIcon.getAttribute("class") === icons[1]){
    p2score ++;
    p2display.textContent = p2score;
    if(p2score === winscore){
      var x = document.createElement("div");
      x.setAttribute("class", "splashscreen")
      x.classList.add("splashscreen");
      document.body.appendChild(x);
      var congrats = document.createElement("h1");
      congrats.setAttribute("class", "congrats");
      congrats.innerHTML = "Congrats   <i class='fa fa-tablet'></i>" ;
      var xel = document.querySelector(".splashscreen");
      xel.appendChild(congrats);
      gameover = true;
    }
  }
}
}})};
resetButton.addEventListener("click", function(){
  p1score = 0;
  p2score = 0;
  p1display.textContent = p1score;
  p2display.textContent = p2score;
  coinIcon.removeAttribute("class");
  gameover = false;
})

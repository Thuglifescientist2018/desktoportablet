var coin = document.querySelector("#coin");
var p1display = document.querySelector("#p1display");
p1display.textContent = p1score;
var p2display = document.querySelector("#p2display");
p2display.textContent = p2score;
var coinicon = document.querySelector("i");
var resetButton = document.querySelector("#reset");
var winScore = 5;
var icons = ["fa fa-tablet", "fa fa-desktop"];
var p1score = 0;
var p2score = 0;
var gameover = false;


if(gameover !== true){

coin.addEventListener("click", function(){

  coinicon.setAttribute("class", "fa fa-angle-double-down");
  this.style.animationName = "toss";
});
coin.addEventListener("dblclick", function(){
  var randicon = Math.floor(Math.random()*icons.length)
  this.style.animationName = "";
  coinicon.setAttribute("class", icons[randicon]);
  var coiniconselect = coinicon.getAttribute("class");
  if(coiniconselect === icons[0]) {
    if(p1score === winScore || p2score === winScore){
      console.log("Game Over");
      gameover = true;
    }else{
    p1score ++;

    p1display.textContent = p1score;
  }
  }
  else if(coiniconselect === icons[1]) {
    if(p1score === winScore || p2score === winScore){
      console.log("Game Over");
      gameover = true;


    }else {
    p2score ++;


    p2display.textContent = p2score;
  }
  }

})


}





resetButton.addEventListener("click", function(){
  coinicon.removeAttribute("class");
  p1score = 0;
  p2score = 0;
  p1display.textContent = p1score;
  p2display.textContent = p2score;

})

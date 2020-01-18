var coin = document.querySelector("#coin");
var coinicon = document.querySelector("i");
var inputplayers = document.querySelector("#pinput");
var icons = ["fa fa-tablet", "fa fa-desktop"];
var p1score = 0;
var p2score = 0;
var p1name;
var p2name;

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
    p1score ++;
    p1display.textContent = p1score;
  }
  else if(coiniconselect === icons[1]) {
    p2score ++;
    p2display.textContent = p2score;
  }
})

inputplayers.addEventListener("keypress", function(key){
  if(key.KeyCode === 13){
    p1name = this.value;
  }

})

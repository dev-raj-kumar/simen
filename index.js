$("button").on("click",bjaiye);
var arr = [];
var user = [];
var ab = true;
var ct = 0;
$(".start").on("click",st);
function st(){
  // $("h1").text("Level "+ct);
  if($("h1").text != ("level "+ct)){

  kheliye();
}
}

function lgaiye( n){
   if(n == 1)
   arr.push("yellow");
   else if(n == 2)
   arr.push("red");
   else if(n == 3)
   arr.push("green");
   else
   arr.push("blue");
}
function kheliye(){
  if(ab == false){
    $("h1").text("Aapse na ho payega ...accha fir se kr lijiye");
    $("body").addClass("banime");
    var ad = new Audio("sounds/wrong.mp3");
    ad.play();
    ct=0;
    id=0;
    arr = [];
    user = [];
    ab = true;
    setTimeout(function () {
      $("body").removeClass("banime");
    }, 1000);
  }
  else{
  var rd = Math.floor(Math.random()*4)+1;
  lgaiye(rd);
  sysbja(arr[arr.length-1]);
  id = 0;user = [];
  ct++;
   $("h1").text("Level "+ct);
 }
}
function sysbja(str){
  var ad = new Audio("sounds/"+str+".mp3");
  ad.play();
  $("#"+str).addClass("anime");
  //var th = this;
  setTimeout(function(){
    $("#"+str).removeClass("anime");}
    ,1000);
}
function bjaiye(){

  var ad = new Audio("sounds/"+$(this).attr("id")+".mp3");
  user.push($(this).attr("id"));
  console.log(arr);
  console.log(user);
  ad.play();
  check();
  $(this).addClass("anime");
  var th = this;
  setTimeout(function(){
    $(th).removeClass("anime");}
    ,180);
  //  check();
}
function check(){
     if(arr[id] != user[id]){
       ab = false;
       console.log(arr[id] +" bggb "+user[id]);
       kheliye();
     }
     id++;
     if(id == arr.length){
     kheliye();
     console.log("levelchange ");
   }
}

document.getElementById("N").innerHTML = "Mukhamedzhan";
document.getElementById("G").innerHTML = "CS-2122N";
document.getElementById("l").innerHTML="881 days left until the freedom!";
function Multiply(){
  var a=document.getElementById("num1").value;
  var b=document.getElementById("num2").value;
  document.getElementById("res").innerHTML=a*b;
}
function Divide(){
  var a=document.getElementById("num1").value;
  var b=document.getElementById("num2").value;
  document.getElementById("res").innerHTML=a/b;
}
  var now=new Date();
  document.getElementById("y").innerHTML="Year : 2022";
  document.getElementById("w").innerHTML="Today is : Monday";
  document.getElementById("d").innerHTML="Date: 31";
  document.getElementById("m").innerHTML="Month: January";
  document.getElementById("t").innerHTML="Current time is : "+now.getHours()+" : "+now.getMinutes()+" : "+now.getSeconds();

document.getElementById("N").innerHTML = "Mukhamedzhan";
document.getElementById("G").innerHTML = "CS-2122N";
const date1 = new Date();
const date2 = new Date('5/20/2024');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
console.log(diffTime + " milliseconds");
console.log(diffDays + " days");
document.getElementById('l').innerHTML = diffDays + " days are left";
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
  const now = new Date();
  const today = new Date();
  document.getElementById("y").innerHTML= "Year: " + today.getFullYear();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  document.getElementById("w").innerHTML="Today is : " + days[today.getDay()];
  document.getElementById("d").innerHTML="Date: " + today.getDate();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  document.getElementById("m").innerHTML="Month: " + months[today.getMonth()];
  document.getElementById("t").innerHTML="Current time is : "+now.getHours()+" : "+now.getMinutes()+" : "+now.getSeconds();

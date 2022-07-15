function fun(){
  var p1=prompt("Enter player1 Name");
  var p2=prompt("Enter player2 Name");
  document.getElementById("one").innerHTML=p1;
  document.getElementById("two").innerHTML=p2;
  var a=Math.floor(Math.random()*6)+1;
  var b=Math.floor(Math.random()*6)+1;
  var im1="images/dice"+a+".png";
  var im2="images/dice"+b+".png";
  document.getElementsByClassName("img1")[0].setAttribute("src",im1);
  document.getElementsByClassName("img2")[0].setAttribute("src",im2);
  if(a>b){
    document.getElementsByTagName("h1")[0].innerHTML="&#128681"
+p1+" Won the Game";
  }
  else if(a==b){
    document.getElementsByTagName("h1")[0].innerHTML="Draw";
  }
  else{
    document.getElementsByTagName("h1")[0].innerHTML=
p2+" Won the Game"+"&#128681";
  }




}

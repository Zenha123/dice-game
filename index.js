let btn=document.getElementsByClassName("btn")[0];
function game(){
let randomno1=Math.floor(Math.random()*6+1);

let randomimage1="images/dice"+randomno1+".png";

let image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimage1);

let randomno2=Math.floor(Math.random()*6+1);

let randomimage2="images/dice"+randomno2+".png";

let image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomimage2);

if(randomno1 > randomno2)
{
    document.getElementsByTagName("h2")[0].innerHTML="Player1 Win🏆";
}
else if(randomno1 < randomno2)
{
    document.getElementsByTagName("h2")[0].innerHTML="Player2 Win🏆";
}
else{
    document.getElementsByTagName("h2")[0].innerHTML="try again!!!";
}
}
btn.addEventListener("click", game);
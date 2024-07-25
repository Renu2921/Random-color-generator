let btn=document.querySelector("button");

let h3=document.querySelector("h3");
let div=document.querySelector("div");


btn.addEventListener("click",()=>{
    h3.innerText=generateColor();
    div.style.backgroundColor=generateColor();
  
})


function generateColor(){
     let red=Math.floor(Math.random()*256);
     let green=Math.floor(Math.random()*256);
     let blue=Math.floor(Math.random()*256);
     let color=`rgb(${red}, ${green}, ${blue})`;
      return color;
}

generateColor();
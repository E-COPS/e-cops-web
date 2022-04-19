// let mainText = document.querySelector("main-dark.main-item")
// window.addEventListener('scroll', function()
// {
//     let value = window.scrollY;

//     if(value<300) {
//         mainText.style.animation = "slide 2s ease-out forwards";

//     }
//     else{
//         mainText.style.animation = "disapper 1s ease-out"
//     }
// });




//--------배너 타이핑 애니메이션---------
var typingBool = false; 
var typingIdx=0; 
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;


var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
typingTxt=typingTxt.split("");  
if(typingBool==false){ 
    typingBool=true; 
    var tyInt = setInterval(typing,100); 
} 
     
function typing(){ 
  $(".typing ul li").removeClass("on");
   $(".typing ul li").eq(liIndex).addClass("on");
  if(typingIdx<typingTxt.length){ 
     $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); 
     typingIdx++; 
   } else{ if(liIndex<liLength-1){
       liIndex++; 
        typingIdx=0;
        typingBool = false; 
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
       
         clearInterval(tyInt);
     
         setTimeout(function(){
           tyInt = setInterval(typing,100);
         },1000);
        } else if(liIndex==liLength-1){
           clearInterval(tyInt);
        }
    } 
}  
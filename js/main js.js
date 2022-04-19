// let mainText = document.querySelector("main.main-item")
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


  


//-------애니메이션 성공---------

//1. 이미지 적용 잘 됨 / 코드 복잡, fade in 안 됨
// $(window).on("load", function () {
//     function fade() {
//       let animation_height = $(window).innerHeight() * 0.5;
//       let ratio = Math.round((1 / animation_height) * 10000) / 10000;
//       $(".main-ani").each(function () {
//         let objectTop = $(this).offset().top;
//         let windowBottom = $(window).scrollTop() + $(window).innerHeight();
//         if (objectTop < windowBottom) {
//           if (objectTop < windowBottom - animation_height) {
//             $(this).css({
//               transition: "opacity 0.4s linear",
//               transition: "right 0.4s linear",
//               opacity: 1,
//               right: "0px",
//             });
//           } else {
//             $(this).css({
//               transition: "opacity 0.4s linear",
//               opacity: (windowBottom - objectTop) * ratio,
//               transition: "right 0.4s linear",
//               right: `${200 * (1 - (windowBottom - objectTop) * ratio)}px`,
//             });
//           }
//         } else {
//           $(this).css({
//             opacity: 0,
//             right: "200px",
//           });
//         }
//       });
//     }
//     $(".main-ani").css({
//       opacity: 0,
//       right: "200px",
//     });
//     fade();

//     $(window).scroll(function () {
//       fade();
//     });
//   });



//2. fade in 잘 됨, 자연스러움 / 이미지 적용 안됨 (높이 계산 문제 - 이미지 바닥까지 가야 애니메이션 실행)
// $(document).ready(function() {
//     $(window).scroll( function(){
//         $('.main-ani').each( function(i){
//             var bottom_of_element = $(this).offset().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
            
//             if( bottom_of_window > bottom_of_element ){
//                 $(this).animate({'opacity':'1','margin-left':'0px'},800);
//             }
            
//         }); 
//     });
// });
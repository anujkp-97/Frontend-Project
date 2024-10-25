// Header scroll
    let nav = document.querySelector(".navbar");
    window.onscroll = function(){
        if(document.documentElement.scrollTop >50){
            nav.classList.add("header-scrolled");
        }else{
            nav.classList("header-scrolled");
        }
    }
//nav hide

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a) {
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
    
})

//swiper slider

var swiper = new Swiper(".mySwiper",{
        direction: "horizontal",
        loop: true,
        pagination:{
            el: ".swiper-pagination",
            clickable: true,
            
        },
        autoplay:{
            delay: 2800,
        },
});

// //counter design

// document.addEventListener("DOMContentLoaded", () => {
//     function counter(id, start, end, duration){
//         let obj = document.getElementById(id),
//         current = start,
//         range = end-start,
//         increment = end > start ? 1 : -1,
//         step = Math.abs(Math.floor(duration / range)),
//         timer = setInterval(() => {
//             current += increment;
//             Object.textContent = current;
//             if(current == end){
//                 clearInterval(timer);
//             }
//         }, step);
//     }
//     counter("count1", 0, 1287, 3000);
//     counter("count2", 100, 5890, 2500);
//     counter("count3", 0, 1440, 3100);
//     counter("count4", 0, 7170, 3000);
// })
       //counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5890, 2500);
    counter("count3", 0, 1440, 3100);
    counter("count4", 0, 8170, 3000);
});
let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-navbar');

menuBtn.onclick = () =>{
   navbar.classList.add('active');
};

closeBtn.onclick = () =>{
    navbar.classList.remove('active');
 };

window.onscroll = () =>{
   navbar.classList.remove('active');
};







document.addEventListener("DOMContentLoaded", function () {
   const boxes = document.querySelectorAll(".services .box");

   const observer = new IntersectionObserver(
       (entries) => {
           entries.forEach((entry) => {
               if (entry.isIntersecting) {
                   entry.target.classList.add("scrolled");
               }
           });
       },
       { threshold: 0.5 }
   );

   boxes.forEach((box) => observer.observe(box));
});

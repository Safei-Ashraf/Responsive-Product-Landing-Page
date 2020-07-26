// //toggling CSS classes based on click event:
// $(function(){
//     $('.menu-toggle, fa-times').on('click', function(){
//         $('nav').toggleClass('active');
//         $('.overlay').toggleClass('menu-open');
//     });
// });
const menuToggle = document.querySelector('.menu-toggle');
const closeBtn = document.querySelector('.fa-times');
const nav = document.querySelector('nav');
const overlay = document.querySelector('.overlay');

menuToggle.addEventListener('click', function(){
nav.classList.toggle('active');
overlay.classList.toggle('menu-open');
});
closeBtn.addEventListener('click', closeNav);
overlay.addEventListener('click', closeNav);

function closeNav(){
    nav.classList.remove('active');
    overlay.classList.remove('menu-open');
}
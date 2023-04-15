gsap.registerPlugin(ScrollTrigger);

const anim = 
gsap.fromTo('.flech', 

  { x: '0%'}, 
  { repeat: -1,
  x: '5vw',
  duration: 1}
);

 
let body=document.querySelector("body");
window.addEventListener("scroll", function() {
  body.classList.add('is-scrolling');
});



const minuteur = window.setInterval(function() {
  body.classList.remove('is-scrolling');
}, 100);






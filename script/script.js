gsap.registerPlugin(ScrollTrigger);

const anim = 
gsap.fromTo('.flech', 

  { x: '0%'}, 
  { repeat: -1,
  x: '5vw',
  duration: 1}
);


const marche =   gsap.fromTo('.spritesheet', 

{ x: '-600px'}, 
{  toggleActions: 'restart complete reverse reset',
x: '1500px',
duration: 10}
          
); 

let body=document.querySelector("body");
window.addEventListener("scroll", function() {
  body.classList.add('is-scrolling');
  marche.play();
 
});



const minuteur = window.setInterval(function() {
  body.classList.remove('is-scrolling')
  marche.pause()
}, 100);



gsap.registerPlugin(ScrollTrigger);

const anim = 
gsap.fromTo('.flech', 

  { x: '0%'}, 
  { repeat: -1,
  x: '5vw',
  duration: 1}
);

let header = document.querySelector("header");
let section = document.querySelector("section");
let ciel = document.querySelector("#chap1");
/*const decor=gsap.to(ciel, {
 y:"-100%", 

  scrollTrigger: {
    markers: true,
    scrub: true,
    start: 'top 0%',
    end: 'bottom 10%',
    toggleActions: 'restart complete reverse reset',
    trigger: header,
  }, });
*/
const marche =   gsap.fromTo('.spritesheet', 

{ x: '-600px'}, 
{  toggleActions: 'restart complete reverse reset',
x: '100px',
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

gsap.fromTo('.nuage.no1', 

{ x: '-100%'}, 
{ repeat: -1,
x: '1500px',
duration: 15}
          
);

gsap.fromTo('.nuage.no2', 

{ x: '100%'}, 
{ repeat: -1,
x: '-1500px',
duration: 15}
          
);

gsap.fromTo('.nuage.no3', 

{ x: '-100%'}, 
{ repeat: -1,
x: '1500px',
duration: 15}
          
);

gsap.fromTo('.nuage.no4', 

{ x: '100%'}, 
{ repeat: -1,
x: '-1500px',
duration: 15}
          
);

gsap.fromTo('.tomber',
           { rotation: 0 },
           { rotation: 360, 
           duration: 6, 
           repeat: -1,
           ease: "none"});

           gsap.fromTo('.tomber', 

{ y: '-5%'}, 
{ repeat: -1,
y: '250%',
duration: 10}
          
);
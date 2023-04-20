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

{ x: '-900px'}, 
{  toggleActions: 'restart complete reverse reset',
x: '900px',
repeat:-1,
duration: 10}
          
); 

const marche2 =   gsap.fromTo('.spritesheet2', 

{ x: '-900px'}, 
{  toggleActions: 'restart complete reverse reset',
x: '900px',
repeat:-1,
duration: 10}
          
); 

let body=document.querySelector("body");
window.addEventListener("scroll", function() {
  body.classList.add('is-scrolling');
  marche.play();
  marche2.play();
});

const minuteur = window.setInterval(function() {
  body.classList.remove('is-scrolling')
  marche.pause()
  marche2.pause()

}, 100);






gsap.fromTo('.nuage.no1', 

{ x: '-100%'}, 
{ repeat: -1,
x: '1500px',
duration: 15});

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

gsap.fromTo(".étoile.gros",
 { scaleY: "10%", scaleX: "10%"  }, {scaleY: "100%", scaleX: "100%",
 duration: 2, 
 repeat: -1, yoyo: true, });

 gsap.fromTo(".étoile.moyen",
 { scaleY: "100%", scaleX: "100%"  }, {scaleY: "40%", scaleX: "40%",
 duration: 1, 
 repeat: -1, yoyo: true, });

 gsap.fromTo(".étoile.petit",
 { scaleY: "100%", scaleX: "100%"  }, {scaleY: "200%", scaleX: "200%",
 duration: 1, 
 repeat: -1, yoyo: true, });

 gsap.fromTo('.fall',
 { rotation: 0},
 { rotation: 12, 
 duration: 1, 
 repeat: -1, yoyo: true,
 ease: "none"});


 gsap.timeline().fromTo('.petite', 

{ x: '0%', y:"0%"}, 
{ 
x: '250px', y:"200px", duration: 2})

.to('.petite', 


{ 
x: '440px', y:"-20px", duration: 2})

.to('.petite', 
{ x: '680px', y:"200px", duration: 2})

.to('.petite', 
{ x: '810px', y:"100px", duration: 2})

.to('.petite', 
{ x: '935px', y:"200px", duration: 2})

.to('.petite', 
{ x: '1180px', y:"-80px", duration: 2})


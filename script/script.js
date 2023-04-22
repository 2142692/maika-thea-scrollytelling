gsap.registerPlugin(ScrollTrigger);

const anim = 
gsap.fromTo('.flech', 

  { y: '0%'}, 
  { repeat: -1,
  y: '5vw',
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


gsap.timeline().fromTo('.petite', 

{ x: '0%', y:"0%"}, 
{ 
x: '44%', y:"46%", duration: 2})

.to('.petite', 

{ 
x: '77%', y:"-5%", duration: 2})

.to('.petite', 
{ x: '120%', y:"46%", duration: 2})

.to('.petite', 
{ x: '140%', y:"20%", duration: 2})

.to('.petite', 
{ x: '160%', y:"46%", duration: 2})

.to('.petite', 
{ x: '204%', y:"-20%", duration: 2});



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

{ y: '-35%'}, 
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


 gsap.timeline().fromTo('.vole', 

 { y: '10%'}, 
 { 
 y: '-150%',
 duration: 10}
           
 )

 .fromTo('.oiseau', 

{ x: '-100%'}, 
{ 
x: '1500px',
duration: 1},"-=1")

.to('.vole', 

 
 { 
 y: '70%',
 duration: 1}
           
 )


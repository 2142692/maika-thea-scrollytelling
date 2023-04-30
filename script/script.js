gsap.registerPlugin(ScrollTrigger);

const anim = 
gsap.fromTo('.flech', 

  { y: '0%'}, 
  { repeat: -1,
  y: '5vw',
  duration: 1}
);


/*chapitre 1*/

gsap.to('#chap1', {
scrollTrigger: {
trigger: "#chap1",
markers: true,
start: "0% 0%",
end: "2300px 0%",
pin: true
}
}

);



/*spritesheet*/
const sprite = document.querySelector(".spritesheet");
let isScrolling;
const marche =   gsap.to('.spritesheet', 

{  scrollTrigger: {
  trigger: ".spritesheet",
  markers: true,
  start: 'center 75%',
    end: 'bottom 15%',
  
  toggleActions: 'reset',
  onUpdate: (e) => {
    window.addEventListener("scroll", function() {
      body.classList.add('is-scrolling');
      
      marche.play();
    });
    
    window.setInterval(function() {
      body.classList.remove('is-scrolling')
      
      marche.pause();
    
    }, 100);
}},
x: '1700px',

duration: 4}  
); 


  



const marche2 =   gsap.fromTo('.spritesheet2', 

{ x: '-900px'}, 
{ 
x: '1100px',
repeat:-1,
duration: 10}
          
); 


let body=document.querySelector("body");
window.addEventListener("scroll", function() {
  body.classList.add('is-scrolling');
  
  marche2.play();
});

const minuteur = window.setInterval(function() {
  body.classList.remove('is-scrolling')
  
  marche2.pause();

}, 100);


/*chapitre 2*/
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




/*chapitre 3*/
gsap.fromTo(".etoile.gros",
 { scaleY: "10%", scaleX: "10%"  }, {scaleY: "100%", scaleX: "100%",
 duration: 2, 
 repeat: -1, yoyo: true, });

 gsap.fromTo(".etoile.moyen",
 { scaleY: "100%", scaleX: "100%"  }, {scaleY: "40%", scaleX: "40%",
 duration: 1, 
 repeat: -1, yoyo: true, });

 gsap.fromTo(".etoile.petit",
 { scaleY: "100%", scaleX: "100%"  }, {scaleY: "200%", scaleX: "200%",
 duration: 1, 
 repeat: -1, yoyo: true, });

 /*chapitre 4*/
 gsap.fromTo('.fall',
 { rotation: 0},
 { rotation: 12, 
 duration: 1, 
 repeat: -1, yoyo: true,
 ease: "none"});

/*chapitre 5*/
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


/*chapitre 6*/
 gsap.timeline().fromTo('.vole', 

 { y: '10%'}, 
 { 
 y: '-150%',
 duration: 10}
           
 )

 .fromTo('.oiseau', 

{ x: '-100%'}, 
{ 
x: '1920px',
duration: 1},"-=1")

.to('.vole', 

 
 { 
 y: '100%',
 duration: 1}
           
 )


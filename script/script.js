gsap.registerPlugin(ScrollTrigger);

let body=document.querySelector("body");
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



/*chapitre 2*/

gsap.to('#chap2', {
  scrollTrigger: {
  trigger: "#chap2",
  markers: true,
  start: "0% 0%",
  end: "2300px 0%",
  pin: true
  }
  }
  
  );
  
  gsap.to(".montagne1",{
    backgroundPosition: "-10% 58%",
    ease: "none",
    scrollTrigger: {
      trigger: ".montagne1",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: true
  }
  })

  gsap.to(".montagne2",{
    backgroundPosition: "60% 66%",
    ease: "none",
    scrollTrigger: {
      trigger: ".montagne2",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: true
  }
  })

  gsap.to(".nuage1",{
    backgroundPosition: "49% 55%",
    ease: "none",
    scrollTrigger: {
      trigger: ".nuage1",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: true
  }
  })

  gsap.to(".nuage2",{
    backgroundPosition: "56% 44%",
    ease: "none",
    scrollTrigger: {
      trigger: ".nuage2",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: true
  }
  })

  gsap.to(".nuage3",{
    backgroundPosition: "30% 50%",
    ease: "none",
    scrollTrigger: {
      trigger: ".nuage3",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: true
  }
  })

  gsap.timeline({
    scrollTrigger: {
        
      markers: true,
      
      start: 'center 75%',
      end: "2300px 0%",
      toggleActions: "restart complete reverse reset",
      trigger: ".petite"},
    })

.fromTo('.petite', 

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
 gsap.to('.fall',
 
 {  scrollTrigger: {
  trigger: ".fall",
  markers: true,
  start: "10% 0%",
  end: "0% 0%"
  },
  rotation: 12, 
 duration: 1, 
 repeat: -1, yoyo: true,
 ease: "none"});

 gsap.to('.fall',{
 
 }
 
 )
  

/*chapitre 5*/

gsap.registerPlugin(MotionPathPlugin);
gsap.to('.tomber', {
  motionPath: {
    align: '#ligne',
    path: '#ligne',
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  },
  scrollTrigger: {
    scrub: true,
    markers: true,
    
    start: '87% 10%',
    end: '2800px 45%',
    trigger: '.tomber'},
 duration:70,
 
},

);

gsap.fromTo('.tomber',
           { rotation: 0},
           { rotation: 360, 
           duration: 6, 
           repeat: -1,
           ease: "none"});

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


          
          



/*chapitre 6*/


gsap.to('#chap6', {
  scrollTrigger: {
  trigger: "#chap6",
  markers: true,
  start: "0% 0%",
  end: "2300px 0%",
  pin: true
  }
  }
  
  );

gsap.timeline({
scrollTrigger: {
    
  markers: true,
  
  start: 'center 75%',
  end: "2300px 0%",
  toggleActions: "restart complete reverse reset",
  trigger: ".vole"},
})
.to('.vole', {
  transformOrigin: '50% 50%',
  motionPath: {
    curviness: 0,
    path: [
      {x: 30, y: -10}, 
      {x: 600, y: -120}
    ]
  },
  duration: 5,
})

.to('.oiseau', 


{ 
x: '1920px',
duration: 1},"-=1")

.to('.vole', 

 
 { 
 y: '200%',
 duration: 1}
           
 );




/*chapitre 7*/
gsap.to('#chap7', {
  scrollTrigger: {
  trigger: "#chap7",
  markers: true,
  start: "0% 0%",
  end: "2300px 0%",
  pin: true
  }
  }
  
  );


  const marche2 =   gsap.to('.spritesheet2', 

{  scrollTrigger: {
  trigger: ".spritesheet2",
  markers: true,
  start: 'center 75%',
    end: 'bottom 15%',
  
  toggleActions: 'reset',
  onUpdate: (e) => {
    window.addEventListener("scroll", function() {
      body.classList.add('is-scrolling');
      
      marche2.play();
    });
    
    window.setInterval(function() {
      body.classList.remove('is-scrolling')
      
      marche2.pause();
    
    }, 100);
}},
x: '1800px',

duration: 4}  
); 

/*gsap.set("#dessin",{drawSVG:"0% 0%"});

function ani() {
  gsap.to(
    "#dessin",
    {
      drawSVG:"0% 100%", 
      duration:1, 
      ease:"power1.inOut"
    }
  );
}*/
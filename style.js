gsap.registerPlugin(ScrollTrigger);

gsap.from(".title",{y:120,opacity:0,duration:1.8,ease:"power4.out"});
gsap.from(".subtitle",{y:80,opacity:0,delay:.4});
gsap.from(".btn",{scale:0,rotation:180,delay:.7});

gsap.utils.toArray(".animate").forEach(el=>{
  gsap.from(el,{
    scrollTrigger:{
      trigger:el,
      start:"top 85%",
      scrub:true
    },
    y:120,
    opacity:0
  });
});

gsap.from(".contact-card",{
  scrollTrigger:".contact-card",
  y:150,
  opacity:0,
  duration:1.5
});

var crsr= document.querySelector("#cursor");
var crsrb= document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets) {
crsr.style.left=dets.x +30 + "px"
crsr.style.top=dets.y + "px"
crsrb.style.left=dets.x - 200 + "px"
crsrb.style.top=dets.y - 200 + "px"
})
gsap.to("#navbar",{
    backgroundColor:"#000",
    duration:1,
    height:"110px",
    scrollTrigger:{
        trigger:"#navbar",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25px",
        end:"top -80px",
        scrub:2
    }
})
var navh4= document.querySelectorAll("#navbar h4")
navh4.forEach(function(element) {
    element.addEventListener("mouseenter",function () {
        crsr.style.scale=3;
        crsr.style.backgroundColor="transparent";
        crsr.style.border="1px solid #fff";
        
    });
    element.addEventListener("mouseleave",function () {
        crsr.style.scale=1;
        crsr.style.backgroundColor="#95C11E";
        crsr.style.border="0px solid #95C11E";        
    });
});
gsap.from("#about img,#about p",{
    y:90,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        start:"top 40%",
        end:"top 50%",
        scrub:2,
    }
})
gsap.from(".cards",{
    scale:1,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 50%",
        end:"top 66%",
        scrub:1
    }
});
gsap.from("#colon1",{
    x:-15,
    y:-15,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 30%",
        end:"top 40%",
        scrub:1
    }
});
gsap.from("#colon2",{
    x:15,
    y:15,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 30%",
        end:"top 40%",
        scrub:1
    }
});

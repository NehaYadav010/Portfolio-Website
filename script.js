function valueSetters(){
    gsap.set("nav a",{
        y: "-100%",
        opacity: 0
    })
    gsap.set("#home span .child",{
        y: "100%",
    })
    gsap.set("#home #hero #cursor",{
        opacity: 0
    })
}


function revealToSpan(){
    document.querySelectorAll(".reveal")
    .forEach(function(elem){
        //create two spans
        let parent = document.createElement("span");
        let child = document.createElement("span");

        //parent and child both set their respective classes
        parent.classList.add("parent");
        child.classList.add("child");

        //span parent gets hcild and child gets elem details
        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);

        //elem replaces its value with parent span
        elem.innerHTML = "";
        elem.appendChild(parent);
    });
}


function loaderAnimation(){

    //for left text movement of loader page (center element)
    gsap.from("#loader .child span",{
        x: 100,
        duration: 1.4,
        stagger: .2,
        ease: Power3.easeInOut
    })
    
    //for upward text movement of loader page
    gsap.to("#loader .parent .child",{
        y:"-100%",
        duration: 2,
        delay: 1,
        ease: Circ.easeInOut
    })
    
    // Create a timeline
    const tl = gsap.timeline();
    
    // Add animations to the timeline
    tl.to("#loader", {
        height: "0%",
        duration: 2,  // Loader stays for 2 seconds before shrinking
        delay: 1.5,  // Delay to keep the loader on the screen for 2 seconds
        ease: "circ.inOut"
    })
    .to("#green", {
        height: "100%",
        top: 0,
        duration: 1,  // Green part enters in 1 second
        delay: -0.8,
        ease: "circ.inOut"
    })
    .to("#green", {
        height: "0%",
        duration: 1,  // Green part exits in 1 second
        ease: "circ.inOut",
        delay: -.5,
        onComplete : function(){
            animateHomePage();
        }
    });
}


function animateHomePage(){
    
    var tl = gsap.timeline();
    tl.to("nav a",{
        y:0,
        opacity: 1,
        stagger: .04,
        ease: Expo.easeInOut
    })
    .to("#home .parent .child",{
        y:0,
        stagger: .1,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to("#home #hero #cursor",{
        opacity: 1,
        ease: Expo.easeInOut,
        delay: -.5
    })
    
}


revealToSpan();
valueSetters();
loaderAnimation();
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
revealToSpan();

//for left text movement of loader page (center element)
gsap.from(".child span",{
    x: 100,
    duration: 1.4,
    stagger: .2,
    ease: Power3.easeInOut
})

//for upward text movement of loader page
gsap.to(".parent .child",{
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
});


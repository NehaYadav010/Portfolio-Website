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

function updateTime() {
    // Get current time in UTC
    const now = new Date();

    // Calculate the time in India (UTC+5:30)
    const indiaOffset = 5.5 * 60 * 60 * 1000;
    const indiaTime = new Date(now.getTime() + indiaOffset);

    // Format the time as HH:MM:SS
    const hours = indiaTime.getUTCHours().toString().padStart(2, '0');
    const minutes = indiaTime.getUTCMinutes().toString().padStart(2, '0');
    

    // Display the formatted time
    document.getElementById('local-time').textContent = `${hours}:${minutes}`;

    // Update the time every second
    setInterval(updateTime, 1000);
    
}

function github(){
    const boxContainer = document.querySelector(".boxContainer")
    for(let i = 0; i<365; i++){
    
        const list = [
          0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167,
          205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210,
          211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92, 131, 132,
          133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217, 177, 218,
          259, 55, 56, 96, 97, 137, 138, 178, 179, 219, 220, 260, 261, 217, 218, 259,
          260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100, 102, 103, 140, 141,
          144, 181, 182, 185, 222, 223, 225, 226, 263, 264, 265, 266, 304, 305, 306,
          24, 25, 65, 66, 67, 106, 107, 108, 147, 148, 149, 150, 188, 189, 229, 230,
          270, 271, 311, 312, 67, 108, 149, 150, 191, 232, 192, 233, 274, 234, 275,
          316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33, 34, 74, 75, 115, 116,
          156, 157, 197, 198, 238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78,
          79, 80, 118, 119, 159, 160, 161, 162, 200, 201, 202, 203, 241, 242, 282,
          283, 284, 285, 323, 324, 325, 326,
        ];
      
      
        const el = document.createElement("div")
        el.classList = list.includes(i) ? "box active" : "box"
        boxContainer.appendChild(el)
      }
}

const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value} <br>
    Email: ${email.value} <br>
    Phone: ${phone.value} <br>
    Subject: ${subject.value} <br>
    Message: ${mess.value}`


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "yadavneha594@gmail.com",
        Password : "479A7955B70E07CAE696F6BBE302099C4CA9",
        To : 'yadavneha594@gmail.com',
        From : "yadavneha594@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            
        }
      }
    );
}




// Initial call to display the time immediately on page load

updateTime();
revealToSpan();
valueSetters();
loaderAnimation();
github();

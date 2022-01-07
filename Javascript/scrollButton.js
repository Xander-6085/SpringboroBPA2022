let button = document.querySelector(".scrollUp");
let currentopacity = "0.5";
const bcheckpoint = 750;

//scroll to fuction
function scrollUp() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    currentopacity = "0.5"
}

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    button.style.opacity = currentScroll/bcheckpoint;
    if((currentScroll/bcheckpoint) > 0.5){
        button.style.opacity = currentopacity;
    }
});

button.addEventListener("mouseenter", () => {
    if(button.style.opacity > 0.1){
        button.style.opacity = 1;
    }
});

button.addEventListener("mouseleave", () => {
    const currentScroll = window.pageYOffset;
    button.style.opacity = currentScroll/bcheckpoint;
    if((currentScroll/bcheckpoint) > 0.5){
        button.style.opacity = currentopacity;
    }
});

let button = document.querySelector(".scrollUp");
let currentopacity = "0.5";
let visible = false;
const bcheckpoint = 750;

//scroll to fuction
function scrollUp() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    currentopacity = "0.5"
}

function hoverOpacity (direction) {
    if(visible){
	if(direction){
            currentopacity = "1";
	    button.style.opacity = currentopacity;
	}
        else {
	    currentopacity = "0.5";
	    button.style.opacity = "0.5";
        }
    }
}

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
    if (currentScroll >= bcheckpoint) {
      button.style.opacity = currentopacity;
      visible = true;
    } else {
      button.style.opacity = "0";
      visible = false;
    }
});

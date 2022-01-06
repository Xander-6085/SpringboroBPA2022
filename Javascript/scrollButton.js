//scroll to fuction
function scrollUp() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
const bcheckpoint = 750;
let button = document.querySelector(".scrollUp");
window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
    if (currentScroll >= bcheckpoint) {
      button.style.opacity = "inherit";
    } else {
      button.style.opacity = "0";
    }
});

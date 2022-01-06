//scroll to fuction
function scrollUp() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    console.log("hi");
}
const bcheckpoint = 750;
let button = document.querySelector(".scrollUp");
window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
    if (currentScroll >= bcheckpoint) {
      button.style.opacity = "1";
    } else {
      button.style.opacity = "inherit";
    }
});

//scroll to fuction
function scrollUp() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    console.log("hi");
}
const checkpoint = 500;
let button = document.querySelector(".scrollUp");
window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
    if (currentScroll >= checkpoint) {
      button.style.opacity = "0";
    } else {
      button.style.opacity = "1";
    }
});

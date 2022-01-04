const checkpoint = 200;
 
window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
      opacity = 1 - currentScroll / checkpoint;
    } else {
      opacity = 0;
    }
    let top = document.querySelectorAll(".front");
	let k = 1-opacity;
    for(var i = 0; i < top.length; i++){
	top[i].style.backgroundColor = "rgba(255,255,255,"+k+")";
    }
});
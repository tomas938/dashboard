const switcher = document.querySelector(".switcher");
const body = document.querySelector("body");
const ball = document.querySelector(".switcher__ball");
const overview = document.querySelectorAll(".overview__grid__item");
const socials = document.querySelectorAll(".socials__item");
// Theme switcher //
switcher.addEventListener("click", () => {
	if (body.classList.contains("dark-theme")) {
		body.classList.remove("dark-theme"), body.classList.add("white-theme");
		ball.style.left = "50%";
		animate(overview, 2);
		animate(socials, 1);
		reset(overview, 1000);
		reset(socials, 1000);
	} else {
		animate(overview, 2);
		animate(socials, 1);
		reset(overview, 1000);
		reset(socials, 1000);
		body.classList.remove("white-theme"), body.classList.add("dark-theme");
		ball.style.left = "5%";
	}
});
// Animate function //
function animate(classlist, speed) {
	classlist.forEach((item, index) => {
		item.style.transition = `${index / speed}s ease-in-out`;
	});
}
// Reset transition //
function reset(classlist, timeout) {
	setTimeout(() => {
		classlist.forEach((item) => {
			item.style.transition = `.3s ease-in-out`;
		});
	}, timeout);
}
window.addEventListener("onload", console.log("helo"));

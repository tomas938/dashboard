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
		animateTop();
		reset(socials, 4000);
	} else {
		body.classList.remove("white-theme"), body.classList.add("dark-theme");
		ball.style.left = "5%";
	}
});
// Transition loop //
function animateTop() {
	socials.forEach((item, index) => {
		item.style.transition = `${index}s ease-in-out`;
	});
}
function animateBottom() {
	overview.forEach((item, index) => {
		item.style.transition = `${index / 4}s ease-in-out`;
	});
}
function reset(classlist, timeout) {
	setTimeout(() => {
		classlist.forEach((item) => {
			item.classList.transition = `all .3s`;
			console.log("hihi");
		});
	}, timeout);
}

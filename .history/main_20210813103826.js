const switcher = document.querySelector(".switcher");
const body = document.querySelector("body");
const ball = document.querySelector(".switcher__ball");
const overview = document.querySelectorAll(".overview__grid__item");
// Theme switcher //
switcher.addEventListener("click", () => {
	if (body.classList.contains("dark-theme")) {
		body.classList.remove("dark-theme"), body.classList.add("white-theme");
		ball.style.left = "50%";
	} else {
		body.classList.remove("white-theme"), body.classList.add("dark-theme");
		ball.style.left = "5%";
	}
});
const transistion = 0.1;
overview.forEach((item) => {
	item.style.transition = `tr`;
});

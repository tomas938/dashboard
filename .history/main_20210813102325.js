const switcher = document.querySelector(".switcher");
const body = document.querySelector("body");
const ball = document.querySelector(".switcher__ball");
// Theme switcher //
switcher.addEventListener("click", () => {
	if (body.classList.contains("dark-theme")) {
		body.classList.remove("dark-theme"), body.classList.add("white-theme");
		ball.style.left = "100%";
	} else {
		body.classList.remove("white-theme"), body.classList.add("dark-theme");
		ball.style.left = "100%";
	}
});

const switcher = document.querySelector(".switcher");
const body = document.querySelector("body");
// Theme switcher //
switcher.addEventListener("click", () => {
	if (body.classList.contains("dark-theme")) {
		body.classList.remove("dark-theme"), body.classList.add("white-theme");
	} else {
		body.classList.remove("white-theme"), body.classList.add("dark-theme");
	}
});

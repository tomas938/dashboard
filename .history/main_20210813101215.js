const switcher = document.querySelector(".switcher");
const body = document.querySelector("body");
// Theme switcher //
switcher.addEventListener("click", () => {
	body.classList.add("light-theme");
});

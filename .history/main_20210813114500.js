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
		animateBottom();
		reset(overview, 1000);
		reset(socials, 1000);
	} else {
		animateTop();
		animateBottom();
		reset(overview, 1000);
		reset(socials, 1000);
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
// function resetOverview() {
// 	setTimeout(() => {
// 		overview.forEach((item) => {
// 			item.style.transition = `.3s ease-in-out`;
// 		});
// 	}, 1000);
// }
// function resetSocials() {
// 	setTimeout(() => {
// 		socials.forEach((item) => {
// 			item.style.transition = `.3s ease-in-out`;
// 		});
// 	}, 1000);
// }
function reset(classlist, timeout) {
	setTimeout(() => {
		classlist.forEach((item) => {
			item.style.transition = `.3s ease-in-out`;
		});
	}, timeout);
}

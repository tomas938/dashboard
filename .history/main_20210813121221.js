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
// GSAP //
gsap.defaults({ ease: "power3" });
gsap.set(".box", { y: 100 });

batch(".box", {
	//interval: 0.1, // time window (in seconds) for batching to occur.
	//batchMax: 3,   // maximum batch size (targets)
	onEnter: (batch) =>
		gsap.to(batch, {
			opacity: 1,
			y: 0,
			stagger: { each: 0.15, grid: [1, 3] },
			overwrite: true,
		}),
	onLeave: (batch) => gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
	onEnterBack: (batch) =>
		gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
	onLeaveBack: (batch) =>
		gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
	// you can also define things like start, end, etc.
});

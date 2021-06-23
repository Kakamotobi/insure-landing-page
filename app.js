const hamburgerBtn = document.querySelector(".navbar__icon-hamburger");
const closeBtn = document.querySelector(".navbar__icon-close");
const navbar = document.querySelector(".navbar__menu");

hamburgerBtn.addEventListener("click", () => {
	hamburgerBtn.classList.add("inactive");
	closeBtn.classList.add("active");
	navbar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
	closeBtn.classList.remove("active");
	hamburgerBtn.classList.remove("inactive");
	navbar.classList.remove("active");
});

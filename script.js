const accordionBtns = document.querySelectorAll(".accordion-btn");
const accordionInfos = document.querySelectorAll(".accordion-info");

const showInfo = (e) => {
	if (e.target.nextElementSibling.classList.contains("active")) {
		e.target.nextElementSibling.classList.remove("active");
	} else {
		closeAll();
		e.target.nextElementSibling.classList.toggle("active");
	}
};

const closeAll = () => {
	accordionInfos.forEach((info) => info.classList.remove("active"));
};

const clickOutside = (e) => {
	if (
		e.target.classList.contains("accordion-btn") ||
		e.target.classList.contains("accordion-info") ||
		e.target.classList.contains("accordion-info-text")
	) {
		return;
	} else {
		closeAll();
	}
};

accordionBtns.forEach((btn) => btn.addEventListener("click", showInfo));
window.addEventListener("click", clickOutside);

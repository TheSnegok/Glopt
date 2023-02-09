"use strict";

window.onload = function () {
	//Slider

	let slideIndex = 2,
		slides = [
			document.getElementById("1"),
			document.getElementById("2"),
			document.getElementById("3"),
		],
		prev = document.querySelector(".slider__prev"),
		next = document.querySelector(".slider__next");

	showSlide(slideIndex);

	function numbers(n) {
		for (let i = 0; i < slides.length; i++) {
			slides[i].id = +slides[i].id + n;

			if (+slides[i].id < 1) {
				slides[i].id = slides.length;
			} else if (+slides[i].id > slides.length) {
				slides[i].id = 1;
			}

			slides[i].classList = "";

			if (+slides[i].id == 1) {
				slides[i].classList = "first";
			} else if (+slides[i].id == 2) {
				slides[i].classList = "second";
			} else if (+slides[i].id == 3) {
				slides[i].classList = "third";
			}
		}
	}

	function showSlide(n) {
		if (n > slides.length) {
			slideIndex = 1;
		}

		if (n < 1) {
			slideIndex = slides.length;
		}

		slides.forEach((item) => (item.style.opacity = "0.5"));
		slides[slideIndex - 1].style.opacity = "1";
	}

	function plusSlides(n) {
		showSlide((slideIndex += n));
	}

	prev.addEventListener("click", function () {
		plusSlides(-1);
		numbers(1);
	});
	next.addEventListener("click", function () {
		plusSlides(1);
		numbers(-1);
	});

	// ScrollTo

	let questionButtonFirst = document.body.querySelector(".button__promo"),
		questionButtonSecond = document.body.querySelectorAll(".button__price"),
		callMeBack = document.body.querySelectorAll(".button"),
		consultation = document.body.querySelector(".consultation"),
		questions = document.body.querySelector(".questions");

	scrollQuestion(questionButtonFirst);
	scrollQuestionArray(questionButtonSecond);
	callMe(callMeBack);

	function scrollQuestionArray(array) {
		array.forEach((elem) => {
			elem.addEventListener("click", function () {
				questions.scrollIntoView(top);
			});
		});
	}

	function scrollQuestion(button) {
		button.addEventListener("click", function () {
			questions.scrollIntoView(top);
		});
	}

	function callMe(array) {
		array.forEach((element) => {
			element.addEventListener("click", function () {
				consultation.scrollIntoView(top);
			});
		});
	}

	// menu
	let linkAdvantages = document.body.querySelector(".href_advantages"),
		linkWork = document.body.querySelector(".href_work"),
		linkPrice = document.body.querySelector(".href_price"),
		linkSchem = document.body.querySelector(".href_schem"),
		linkReviews = document.body.querySelector(".href_reviews"),
		linkMap = document.body.querySelector(".href_map"),
		advantages = document.body.querySelector(".advantages"),
		work = document.body.querySelector(".work"),
		price = document.body.querySelector(".price"),
		schem = document.body.querySelector(".schem"),
		reviews = document.body.querySelector(".reviews"),
		map = document.body.querySelector(".map");

	transition(linkAdvantages, advantages);
	transition(linkWork, work);
	transition(linkPrice, price);
	transition(linkSchem, schem);
	transition(linkReviews, reviews);
	transition(linkMap, map);

	function transition(link, elem) {
		link.addEventListener("click", function () {
			elem.scrollIntoView(top);
		});
	}

	// Modal

	let modal = document.body.querySelector(".modal"),
		imgClose = document.body.querySelector(".politics__close"),
		href = document.body.querySelector(".footer__bottom_politic span");

	modalOpen(href);
	modalClose(imgClose);

	function modalOpen(link) {
		link.addEventListener("click", function () {
			modal.style.display = "block";
			document.body.style.overflow = "hidden";
		});
	}

	function modalClose(close) {
		close.addEventListener("click", function () {
			modal.style.display = "none";
			document.body.style.overflow = "";
		});
	}

	// Up

	let up = document.createElement("div"),
		img = document.createElement("img"),
		scrolled,
		timer;

	img.src = "icons/ups.svg";
	img.alt = "ups";
	up.className = "ups";
	document.body.append(up);
	up.append(img);

	goUp(up);
	opacityUp();

	function scrolledToTop() {
		if (scrolled > 0) {
			window.scrollTo(0, scrolled);
			scrolled = scrolled - 100;
			timer = setTimeout(scrolledToTop, 10);
		} else {
			clearTimeout(timer);
			window.scrollTo(0, 0);
		}
	}

	function goUp(link) {
		link.addEventListener("click", function () {
			scrolled = window.pageYOffset;
			scrolledToTop();
		});
	}

	function opacityUp() {
		window.addEventListener("scroll", function () {
			if (window.pageYOffset == 0) {
				up.style.display = "none";
				img.style.display = "none";
			} else if (window.pageYOffset > 50) {
				up.style.display = "block";
				img.style.display = "inline";
			}
		});
	}

	// burger menu open
	let burger = document.body.querySelector("#burger"),
		menu = document.body.querySelector(".promo__list ul");

	const openMenu = () => {
		burger.addEventListener("click", () => {
			burger.classList.toggle("open");
			burger.classList == "open"
				? menu.classList.toggle("show")
				: menu.classList.toggle("show");
		});
	};
	openMenu();
};

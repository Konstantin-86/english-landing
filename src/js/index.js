import { gsap } from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const body = document.querySelector("body");

/////////burger

const list = document.querySelector(".main-nav-list");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  list.classList.toggle("active");
  burger.classList.toggle("active");
});

/////////// scrollToTop

const scrollToTop = document.querySelector("#scrollToTop");
scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});

///////////modal
const modal = document.querySelector("#myModal");
const closeModal = document.querySelector(".close-modal");
const modalOpenButton = document.querySelectorAll(".button");
const submitButton = document.querySelector(".modal-button");

const inputName = document.querySelector(".input-name");

const form = document.getElementById("form");

modalOpenButton.forEach((el) => {
  el.addEventListener("click", () => {
    modal.classList.add("modal--active");
    body.style.overflow = "hidden";
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("modal--active");
  body.style.overflow = "auto";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove("modal--active");
    body.style.overflow = "auto";
  }
};
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputName.value.length === 0) return alert("Заполните поле");
  if (inputName.value.length <= 2) {
    return alert("Имя должно быть не менее 3-х символов");
  }
});

////accordion

const accordion = document.querySelectorAll(".accordion-item__questionInner");

accordion.forEach((el) => {
  el.addEventListener("click", () => {
    el.childNodes[3].classList.toggle("active");
    el.classList.toggle("active");
    el.nextElementSibling.classList.toggle("active");
  });
});

//////////gsap animations

gsap.from(".header-content__item", {
  y: 100,
  opacity: 0.2,
  duration: 1,
  stagger: 0.25,
  scrollTrigger: {
    trigger: ".header-content__inner",
    start: "top bottom",
    end: "+=100 center",
    scrub: 1,
  },
});

gsap.from(".second-list__item", {
  y: 100,
  opacity: 0.2,
  duration: 1,
  stagger: 0.25,
  scrollTrigger: {
    trigger: ".secind-list",
    start: "top bottom",
    end: "+=100 center",
    scrub: 1,
  },
});

gsap.from(".resultSection__item", {
  yPercent: 100,
  opacity: 0.2,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".resultSection__item",
    start: "top bottom",
    end: "+=100 center",
    scrub: 1,
  },
});

gsap.from(".giftHart", {
  y: 20,
  opacity: 0,
  scale: 0,
  duration: 2,
  stagger: 0.4,

  scrollTrigger: {
    trigger: ".giftHart",
    start: "top bottom",
    scrub: 1,
  },
});

gsap.from(".gift-leter", {
  x: 100,
  rotate: 90,
  opacity: 0,
  scale: 0,
  duration: 2,
  stagger: 1.1,

  scrollTrigger: {
    trigger: ".gift-leter",
    start: "top bottom",
    scrub: 1,
  },
});

import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const swiper = new Swiper(".mySlider", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 15,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".mySlider__nextBtn",
    prevEl: ".mySlider__prevBtn",
  },
});

import { gsap } from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Inputmask from "inputmask";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const body = document.querySelector("body");

/////////burger

const list = document.querySelector(".main-nav-list");
const listItems = document.querySelectorAll(".main-nav-list-link");
const burger = document.querySelector(".burger");
const burgerLine1 = document.querySelector(".burger-line1");
const burgerLine2 = document.querySelector(".burger-line2");
const burgerLine3 = document.querySelector(".burger-line3");

burger.addEventListener("click", () => {
  list.classList.toggle("active");
  burger.classList.toggle("active");
  burgerLine1.classList.toggle("active");
  burgerLine2.classList.toggle("active");
  burgerLine3.classList.toggle("active");
  body.style.overflow = "auto";
  if (list.classList.contains("active")) {
    body.style.overflow = "hidden";
  }
});

listItems.forEach((el) => {
  el.addEventListener("click", () => {
    list.classList.remove("active");
    burger.classList.remove("active");
    burgerLine1.classList.remove("active");
    burgerLine2.classList.remove("active");
    burgerLine3.classList.remove("active");
    body.style.overflow = "auto";
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    list.classList.remove("active");
    burger.classList.remove("active");
    burgerLine1.classList.remove("active");
    burgerLine2.classList.remove("active");
    burgerLine3.classList.remove("active");
    body.style.overflow = "auto";
  }
});
/////////// scrollToTop

const scrollToTop = document.querySelector(".scrollToTop");
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
const topButton = document.querySelectorAll(".top-button");

const inputName = document.querySelector(".input-name");
const inputNameLabel = document.querySelector(".input-name--label");

const inputPhone = document.querySelector(".input-phone");
const inputPhoneLabel = document.querySelector(".input-phone--label");

const inputEmail = document.querySelector(".input-email");
const inputEmailLabel = document.querySelector(".input-email--label");

const modalContent = document.querySelector(".modal-content");
const modalSucsess = document.querySelector(".modal-sucsess");

const sucsessText = document.querySelector(".modal-sucsess__text");
const modalSucsessCloseBtn = document.querySelector(".modal-sucsess-closeBtn");

Inputmask(
  { mask: "+7 (999) 999-99-99" },
  { regex: "/^+7sd{3}sd{3}-d{2}-d{2}$/" },
  { placeholder: "+7 (___) ___-__-__" }
).mask(inputPhone);

Inputmask({ regex: "/[^a-zа-яёd]]/i" }).mask(inputEmail);

const openModalFunc = () => {
  modal.classList.add("modal--active");
  body.style.overflow = "hidden";
};

topButton.forEach((el) => {
  el.addEventListener("click", openModalFunc);
});

modalOpenButton.forEach((el) => {
  el.addEventListener("click", openModalFunc);
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("modal--active");
  body.style.overflow = "auto";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove("modal--active");
    body.style.overflow = "auto";
    closeSucsessFunc();
  }
};
const scrollFunc = () => {
  if (window.scrollY > 300) {
    scrollToTop.classList.add("active");
    window.removeEventListener("scroll", scrollFunc);
  }
};
window.addEventListener("scroll", scrollFunc);

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  ////Input Name Validate
  let valid = true;
  if (inputName.value.length <= 2) {
    inputName.classList.add("input-name--wrong");
    inputNameLabel.innerHTML = "Минимум 3 символа";
    valid = false;
  }

  ////Input Phone Validate
  const inputPhoneValue = inputPhone.value.replace(/\D/g, "");
  if (inputPhoneValue.length !== 11) {
    inputPhone.classList.add("input-phone--wrong");
    inputPhoneLabel.innerHTML = "Неправильный номер ";
    valid = false;
  }
  ////Input Mail Validate
  const inputEmailValue = inputEmail.value;
  if (!inputEmailValue.includes("@")) {
    inputEmail.classList.add("input-email--wrong");
    inputEmailLabel.innerHTML = "Неправильный E-mail";
    valid = false;
  }
  if (valid) {
    sucsessText.innerHTML = `Спасибо, ${inputName.value}, мы скоро с вами свяжемся.`;
    modalContent.classList.add("hide");
    modalSucsess.classList.add("show");
  }
});

inputName.addEventListener("focus", () => {
  inputName.classList.remove("input-name--wrong");
  inputNameLabel.innerHTML = "";
});

inputPhone.addEventListener("focus", () => {
  inputPhone.classList.remove("input-phone--wrong");
  inputPhoneLabel.innerHTML = "";
});

inputEmail.addEventListener("focus", () => {
  inputEmail.classList.remove("input-email--wrong");
  inputEmailLabel.innerHTML = "";
});

const closeSucsessFunc = () => {
  modalContent.classList.remove("hide");
  modalSucsess.classList.remove("show");
  modal.classList.remove("modal--active");
  body.style.overflow = "auto";
  inputName.value = "";
  inputPhone.value = "";
  inputEmail.value = "";
  sucsessText.innerHTML = "";
};

modalSucsessCloseBtn.addEventListener("click", closeSucsessFunc);

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

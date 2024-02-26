import { gsap } from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

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

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  slidesPerView: 2,
  spaceBetween: 20,
  /*  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }, */
  navigation: {
    nextEl: ".mySlider__nextBtn",
    prevEl: ".mySlider__prevBtn",
  },
});

import Tab from "./functions/tabs";
import Splide from "@splidejs/splide";
import DynamicAdapt from "./functions/dynamicAdapt";
import { burger } from "./functions/burger";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

window.addEventListener("DOMContentLoaded", () => {
  //videos

  class Video {
    constructor(parentName, videoName) {
      this.parent = document.querySelector(parentName);
      this.btn = this.parent.querySelector(".video-btn");
      this.video = this.parent.querySelector(videoName);
      this.misc = this.parent.querySelector(".video-misc");
    }

    render() {
      this.btn.addEventListener("click", (e) => {
        if (this.video.paused == true) {
          this.video.play();
          this.video.setAttribute("controls", true);
          this.btn.classList.add("hide");
          if (this.misc) {
            this.misc.classList.add("hide");
          }
        } else {
          this.video.pause();
          this.video.setAttribute("controls", false);
        }
      });
    }
  }
  new Video(".efficiency__video-item", ".efficiency__video-ford").render();
  new Video(".media__video", ".media__video-item").render();

  // sliders

  let efficiencySlider = new Splide(".efficiency__slider", {
    pagination: false,
    perPage: 3,
    perMove: 3,
    gap: 6,
    type: "loop",
    arrowPath:
      "M40.7071 8.19539C41.0976 7.80486 41.0976 7.1717 40.7071 6.78117L34.3431 0.417213C33.9526 0.0266891 33.3195 0.0266891 32.9289 0.417213C32.5384 0.807738 32.5384 1.4409 32.9289 1.83143L38.5858 7.48828L32.9289 13.1451C32.5384 13.5357 32.5384 14.1688 32.9289 14.5593C33.3195 14.9499 33.9526 14.9499 34.3431 14.5593L40.7071 8.19539ZM0 8.48828L40 8.48828V6.48828L0 6.48828L0 8.48828Z",
    breakpoints: {
      768: {
        perPage: 1.5,
      },
    },
  });
  efficiencySlider.mount();

  let faqSlider = new Splide(".faq__slider", {
    pagination: false,
    arrowPath:
      "M0.292893 6.78117C-0.0976295 7.1717 -0.0976296 7.80486 0.292892 8.19538L6.65685 14.5593C7.04738 14.9499 7.68054 14.9499 8.07107 14.5593C8.46159 14.1688 8.46159 13.5357 8.07107 13.1451L2.41422 7.48828L8.07107 1.83142C8.46159 1.4409 8.46159 0.807735 8.07107 0.417211C7.68054 0.0266861 7.04738 0.0266861 6.65685 0.41721L0.292893 6.78117ZM41 6.48828L1 6.48828L1 8.48828L41 8.48828L41 6.48828Z",
  });

  faqSlider.mount();

  // accordeon

  const accordeons = document.querySelectorAll(".faq__item");

  accordeons.forEach((el) => {
    el.addEventListener("click", (e) => {
      const self = e.currentTarget;
      const content = self.querySelector(".faq__item-content");

      content.classList.toggle("active");
      self.classList.toggle("active");
      content.style.maxHeight = content.scrollHeight + "px";

      if (!content.classList.contains("active")) {
        content.style.maxHeight = null;
      }
    });
  });

  // animations

  const tl = gsap.timeline();
  const anim = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".site-container", { opacity: 0, duration: 1 });

  tl.from(".offer__title", { opacity: 0, duration: 0.5 })
    .from(".offer__info", {
      opacity: 0,
      delay: 0.2,
      duration: 0.5,
    })
    .from(".offer__video", { opacity: 0, delay: 0.3, duration: 0.5 })
    .from(".offer__decor-item", { opacity: 0, delay: 0.4, duration: 0.5 });

  gsap.from(".device__heading-title", {
    scrollTrigger: ".device__heading-title",
    opacity: 0,
    duration: 2,
  });
});

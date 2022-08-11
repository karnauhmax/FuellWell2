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
  const master = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".site-container", { opacity: 0, duration: 1 });

  function device() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".device",
        start: "top 85%",
      },
    });
    tl.from(".device__heading", {
      opacity: 0,
      duration: 0.5,
    });

    tl.from(".device__info-head", {
      opacity: 0,
      duration: 0.5,
    });

    tl.from(".device__img", {
      opacity: 0,
      duration: 0.5,
    });
    tl.from(".device__info-body", {
      opacity: 0,
      duration: 0.5,
    });

    return tl;
  }

  function benefits() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".benefits",
        start: "top 20%",
      },
    });

    tl.from(".benefits__inner", { opacity: 0, duration: 0.5 });
    tl.from(".benefits__title", { opacity: 0, duration: 0.5, delay: 0.5 });

    return tl;
  }

  function additionalBenefits() {
    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top bottom",
        trigger: ".benefits__additional",
      },
    });

    tl.from(".benefits__additional-img", { opacity: 0, duration: 0.5 });
    tl.from(".benefits__additional-info", { opacity: 0, duration: 0.5 });
    tl.from(".benefits__additional-title", { opacity: 0, duration: 0.7 });
  }

  function media() {
    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top bottom",
        trigger: ".media",
      },
    });

    tl.from(".media__video", { opacity: 0, duration: 0.5 });
    tl.from(".media__title", { opacity: 0, duration: 0.5 });
  }

  function efficiency() {
    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top bottom",
        trigger: ".efficiency",
      },
    });

    tl.from(".efficiency__title", { opacity: 0, duration: 0.5 });
    tl.from(".efficiency__slider", { opacity: 0, duration: 0.5 });
    tl.from(".efficiency__media", { opacity: 0, duration: 0.5 });

    return tl;
  }

  function reports() {
    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top 50%",
        trigger: ".reports__inner",
      },
    });

    tl.from(".reports__main-title", { opacity: 0, duration: 0.5, delay: 0.5 });
    tl.from(".reports__additional", { opacity: 0, duration: 0.5 });
    return tl;
  }

  function faq() {
    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top 70%",
        trigger: ".faq",
      },
    });

    tl.from(".faq__slider", { opacity: 0, duration: 1 });
  }

  function cooperation() {
    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top 45%",
        trigger: ".cooperation",
      },
    });

    tl.from(".cooperation__callback", { opacity: 0, duration: 0.5 });
    tl.from(".cooperation__inner :nth-child(1)", { opacity: 0, duration: 1.2 });
    tl.from(".cooperation__inner :nth-child(2)", { opacity: 0, duration: 1.2 });
    tl.from(".cooperation__inner :nth-child(3)", { opacity: 0, duration: 1.2 });

    return tl;
  }

  master
    .add(device)
    .add(benefits)
    .add(additionalBenefits)
    .add(media)
    .add(efficiency)
    .add(reports)
    .add(faq)
    .add(cooperation);

  //calc

  const form = document.querySelector(".calculator__form");
  const mileage = form.querySelector(".calculator__mileage");
  const consumption = form.querySelector(".calculator__consumption");
  const cost = form.querySelector(".calculator__cost");
  const solution = document.querySelector(".calculator__solution");
  const solutionCost = solution.querySelector(".calculator__solution-cost");
  const solutionEmission = solution.querySelector(
    ".calculator__solution-emission"
  );
  const savings = document.querySelector(".calculator__savings");
  const savingsCost = savings.querySelector(".calculator__savings-cost");
  const savingsEmission = savings.querySelector(
    ".calculator__savings-emission"
  );
  const regionSelect = form.querySelector(".calculator__region");
  const submitBtn = form.querySelector(".calculator__btn");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkValue(regionSelect);
    solution.closest(".calculator__results").classList.add("active");
    submitBtn.style.display = "none";
  });

  regionSelect.addEventListener("change", function () {
    if (solution.closest(".calculator__results").classList.contains("active")) {
      checkValue(this);
    }
  });

  function checkValue(item) {
    if (item.value === "EUR") {
      euCalc(mileage.value, consumption.value, cost.value, 10, 15, 2);
    } else if (item.value === "GB") {
      gbCalc(mileage.value, consumption.value, cost.value, 10, 15, 20.04);
    } else {
      usCalc(mileage.value, consumption.value, cost.value, 10, 15, 16.69);
    }
  }

  function euCalc(
    mileage,
    consumption,
    cost,
    efficiency,
    co2Efficiency,
    co2DieselEfficiency
  ) {
    const result = (mileage / 100) * consumption * cost;
    const economy = (result * efficiency) / 100;
    const co2 = (co2DieselEfficiency * consumption * mileage) / 100;
    const co2Economy = (co2 * co2Efficiency) / 100;
    const tempStorage = [result, economy, co2, co2Economy];

    solutionCost.innerHTML = `${Math.round(result)}`;
    solutionEmission.innerHTML = `${Math.round(co2)}`;
    savingsCost.innerHTML = `${Math.round(economy)}`;
    savingsEmission.innerHTML = `${Math.round(co2Economy)}`;
  }

  function gbCalc(
    mileage,
    consumption,
    cost,
    efficiency,
    co2Efficiency,
    co2DieselEfficiency
  ) {
    const result = (mileage / consumption) * cost;
    const economy = (result * efficiency) / 100;
    const co2 = co2DieselEfficiency * (mileage / consumption);
    const co2Economy = (co2 * co2Efficiency) / 100;

    solutionCost.innerHTML = `${Math.round(result)}`;
    solutionEmission.innerHTML = `${Math.round(co2)}`;
    savingsCost.innerHTML = `${Math.round(economy)}`;
    savingsEmission.innerHTML = `${Math.round(co2Economy)}`;
  }

  function usCalc(
    mileage,
    consumption,
    cost,
    efficiency,
    co2Efficiency,
    co2DieselEfficiency
  ) {
    const result = (mileage / consumption) * cost;
    const economy = (result * efficiency) / 100;
    const co2 = co2DieselEfficiency * (mileage / consumption);
    const co2Economy = (co2 * co2Efficiency) / 100;
    const tempStorage = [
      Math.floor(economy),
      Math.floor(result),
      Math.floor(co2),
      Math.floor(co2Economy),
    ];

    solutionCost.innerHTML = `${Math.round(result)}`;
    solutionEmission.innerHTML = `${Math.round(co2)}`;
    savingsCost.innerHTML = `${Math.round(economy)}`;
    savingsEmission.innerHTML = `${Math.round(co2Economy)}`;
  }
});

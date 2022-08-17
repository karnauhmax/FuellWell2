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
        console.log(this.video);
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
  new Video(".scania-video", ".efficiency__video-scania").render();
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
  const solutionHead = solution.querySelector(
    ".calculator__solution .calculator__cost-head"
  );
  const solutionMain = solution.querySelector(
    ".calculator__solution .calculator__cost-main"
  );
  const solutionEmission = solution.querySelector(
    ".calculator__solution-emission"
  );
  const solutionEmissionHead = solution.querySelector(
    ".calculator__solution-head"
  );
  const savings = document.querySelector(".calculator__savings");
  const savingsCost = savings.querySelector(".calculator__savings-cost");
  const savingsEmission = savings.querySelector(
    ".calculator__savings-emission"
  );
  const savingsEmissionHead = savings.querySelector(
    ".calculator__emission-head"
  );
  const regionSelect = form.querySelector(".calculator__region");
  const submitBtn = form.querySelector(".calculator__btn");
  const mileageLabel = document.querySelector(
    ".calculator__mileage-label span"
  );
  const costLabel = document.querySelector(".calculator__cost-label span");
  const consumptionLabel = document.querySelector(
    ".calculator__consumption-label span"
  );
  const currency = document.querySelector(".calculator__currency");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      mileage.value &&
      cost.value &&
      consumption.value &&
      mileage.value > 0 &&
      cost.value > 0 &&
      consumption.value > 0
    ) {
      calculateResult(regionSelect);
      solution.closest(".calculator__results").classList.add("active");
      submitBtn.classList.add("hide");
    }
  });

  regionSelect.addEventListener("change", function () {
    changemetrics();
    if (
      solution.closest(".calculator__results").classList.contains("active") &&
      mileage.value &&
      cost.value &&
      consumption.value &&
      mileage.value > 0 &&
      cost.value > 0 &&
      consumption.value > 0
    ) {
      calculateResult(this);
    }
  });

  // countries specific calcs
  function calculateResult(regionSelect) {
    const parameters = {
      efficiency: 10,
      co2Efficiency: 15,
      dieselEfficiencies: {
        euro: 2,
        gbr: 20.04,
        usa: 16.69,
      },
    };

    let result;
    let co2;
    let economy;
    let co2Economy;

    switch (regionSelect.value) {
      case "EUR":
        result = (mileage.value / 100) * consumption.value * cost.value;
        co2 =
          (parameters.dieselEfficiencies.euro *
            consumption.value *
            mileage.value) /
          100;
        break;

      case "GB":
        result = (mileage.value / consumption.value) * cost.value;
        co2 =
          parameters.dieselEfficiencies.gbr *
          (mileage.value / consumption.value);
        break;

      case "US":
        result = (mileage.value / consumption.value) * cost.value;
        co2 =
          parameters.dieselEfficiencies.usa *
          (mileage.value / consumption.value);

        break;
    }

    changemetrics();

    economy = (result * parameters.efficiency) / 100;
    co2Economy = (co2 * parameters.co2Efficiency) / 100;

    solutionCost.innerHTML = `${Math.round(result)}`;
    solutionEmission.innerHTML = `${Math.round(co2)}`;
    savingsCost.innerHTML = `${Math.round(economy)}`;
    savingsEmission.innerHTML = `${Math.round(co2Economy)}`;
  }

  // change metrics

  function changemetrics() {
    switch (regionSelect.value) {
      case "EUR":
        costLabel.innerHTML = "Fuel cost in EUR (per liter)";
        mileageLabel.innerHTML = "Vehicle mileage (km)";
        solutionHead.innerHTML = "cost spent on fuel EUR/1year";
        solutionEmissionHead.innerHTML = "CO2 emission (kg)";
        savingsEmissionHead.innerHTML = "CO2 emission (kg)";
        currency.value = "EUR";
        consumptionLabel.innerHTML = "Fuel consumption L/100km";
        break;
      case "GB":
        costLabel.innerHTML = "Fuel cost in GBP per gallon (GB)";
        mileageLabel.innerHTML = "Vehicle mileage (GB miles)";
        solutionHead.innerHTML = "cost spent on fuel GBP/1year";
        solutionEmissionHead.innerHTML = "CO2 emission (lb)";
        savingsEmissionHead.innerHTML = "CO2 emission (lb)";
        consumptionLabel.innerHTML = "Fuel consumption MPG(GB)";
        currency.value = "GBP";

        break;
      case "US":
        costLabel.innerHTML = "Fuel cost in USD per gallon (US)";
        mileageLabel.innerHTML = "Vehicle mileage (US miles)";
        solutionHead.innerHTML = "cost spent on fuel USD/1year";
        solutionEmissionHead.innerHTML = "CO2 emission (lb)";
        savingsEmissionHead.innerHTML = "CO2 emission (lb)";
        consumptionLabel.innerHTML = "Fuel consumption MPG(US)";
        currency.value = "USD";
        break;
    }
  }

  // ticker

  const reportsTicker = document.querySelector(".reports__ticker-inner");
  const benefitsTicker = document.querySelector(".benefits__ticker-inner");

  for (let i = 0; i < 20; i++) {
    const tickerItem = document.createElement("div");
    tickerItem.classList.add("ticker__item");
    tickerItem.innerHTML = `
        <p>FUEL</p>
        <p>well</p>
        <p>eco </p>
    `;
    reportsTicker.append(tickerItem);
  }

  for (let i = 0; i < 20; i++) {
    const tickerItem = document.createElement("div");
    tickerItem.classList.add("ticker__item");
    tickerItem.innerHTML = `
        <p>FUEL</p>
        <p>well</p>
        <p>eco </p>
    `;
    benefitsTicker.append(tickerItem);
  }
  // smooth scroll

  //contact

  const cooperationContact = document.querySelector(".cooperation__contact");
  const contactBtn = document.querySelector(".cooperation__contact-link");

  contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(cooperationContact);
    cooperationContact.classList.add("active");
  });
});

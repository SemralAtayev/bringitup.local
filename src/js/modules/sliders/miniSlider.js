import Slider from "./slider";

export default class MiniSlider extends Slider {
  constructor(wrapperSelector, prev, next, activeClass, animate, autoplay) {
    super(wrapperSelector, prev, next, activeClass, animate, autoplay);
  }

  decorateSlides() {
    if(this.animate){ 
      this.slides[0].querySelectorAll("div").forEach((d) => {
        d.style.opacity = 1;
      });
    }
   
  }

  autoplaySlides() {
    this.slides.forEach((slide) => {
      slide.classList.remove(this.activeClass);
    });
    this.wrapper.appendChild(this.slides[0]);
    this.slides[0].classList.add(this.activeClass);
    this.decorateSlides();
  }

  throwEnd() {
    if (
      this.slides[0].tagName == "BUTTON" ||
      this.slides[1].tagName == "BUTTON"
    ) {
      const btns = this.wrapper.querySelectorAll('[type = "button"]');
      btns.forEach((btn) => {
        this.wrapper.appendChild(btn);
      });
    }
  }

  throwToBegin() {
    if (
      this.slides[this.slides.length - 1].tagName == "BUTTON" ||
      this.slides[this.slides.length - 2].tagName == "BUTTON"
    ) {
      const btns = this.wrapper.querySelectorAll('[type = "button"]');
      btns.forEach((btn) => {
        this.wrapper.insertBefore(btn, this.slides[this.slides.length - 3]);
      });
    }
  }

  switchSlides() {
    // next
    this.next.addEventListener("click", () => {
      this.slides.forEach((slide) => {
        slide.classList.remove(this.activeClass);
        slide.querySelectorAll("div").forEach((d) => {
          d.style.opacity = "";
        });
      });

      this.wrapper.appendChild(this.slides[0]);

      this.slides[0].classList.add(this.activeClass);

      this.decorateSlides();

      this.throwEnd();
    });

    // prev

    this.prev.addEventListener("click", () => {
      let activeSlide = this.slides[this.slides.length - 1];

      this.slides.forEach((slide) => {
        slide.classList.remove(this.activeClass);
        slide.querySelectorAll("div").forEach((d) => {
          d.style.opacity = "";
        });
      });

      this.wrapper.insertBefore(activeSlide, this.wrapper.firstChild);

      activeSlide.classList.add(this.activeClass);

      this.decorateSlides();

      this.throwToBegin();
    });
  }

  init() {
    this.wrapper.style.cssText = `
     overflow: hidden;
     display: flex;
     flex-wrap: wrap;
     align-items: flex-start`;

    this.decorateSlides();

    this.switchSlides();

    if (this.autoplay) {
      const interval = setInterval(() => {
        this.autoplaySlides();
      }, 5000);
    }

    this.throwToBegin();
  }
}

export default class Slider {
  constructor(triggersSelector, wrapperSelector) {
    this.btns = document.querySelectorAll(triggersSelector);
    this.wrapper = document.querySelector(wrapperSelector);
    this.slides = this.wrapper.children;
    this.sliderIndex = 1;
  }

  showSlide(n) {
    if (n > this.slides.length) {
      this.sliderIndex = 1;
    }
    if (n < 1) {
      this.sliderIndex = this.slides.length;
    }

    this.slides.forEach((slide) => {
      slide.classList.add("fadeIn", "animated");
      slide.style.display = "none";
    });

    this.slides[this.sliderIndex - 1].style.display = "block";
  }

  plusIndex(n) {
    this.showSlide((this.sliderIndex += n));
  }

  render() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.plusIndex(1);
      });
    });

    this.showSlide(this.sliderIndex);
  }
}

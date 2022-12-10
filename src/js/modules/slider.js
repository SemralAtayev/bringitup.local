export default class Slider {
  constructor(triggersSelector, wrapperSelector, teacherSelector) {
    this.btns = document.querySelectorAll(triggersSelector);
    this.wrapper = document.querySelector(wrapperSelector);
    this.slides = this.wrapper.children;
    this.sliderIndex = 1;
    this.logo = document.querySelectorAll(".original_logo");
    
  }

  // show small teacher

  showSlide(n) {
    if (n > this.slides.length) {
      this.sliderIndex = 1;
    }
    if (n < 1) {
      this.sliderIndex = this.slides.length;
    }

    this.slides.forEach((slide) => {
      slide.classList.add("fadeInDown", "animated");
      slide.style.opacity = "0";
      slide.style.transition = "all .6s ease";
      slide.style.display = "none";
    });

    this.slides[this.sliderIndex - 1].style.opacity = "1";
    this.slides[this.sliderIndex - 1].style.display = "block";

    try {
      this.teacher = document.querySelector(".hanson");  

      this.teacher.classList.add("animated");
      this.teacher.style.opacity = "0";

      if (this.slides[this.sliderIndex - 1].classList.contains("modules")) {
        setTimeout(() => {
          this.teacher.style.opacity = "1";
          this.teacher.classList.add('fadeInUp');
        }, 3000);
      } else {
        this.teacher.style.opacity = "0";
        this.teacher.classList.remove('fadeInDown');
      }
    } catch (error) {}
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

    this.logo.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        // console.log('ss');
        this.sliderIndex = 1;
        this.showSlide(this.sliderIndex);
      });
    });

    this.showSlide(this.sliderIndex);
  }
}

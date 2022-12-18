import Slider from "./slider";

export default class MainSlider extends Slider {
  constructor(triggersSelector, wrapperSelector, prevOther, nextOther) {
    super(triggersSelector, wrapperSelector, prevOther, nextOther);
  }

  showSlide(n) {
    try {
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
    } catch (error) {}

    try {
      this.teacher = document.querySelector(".hanson");

      this.teacher.classList.add("animated");
      this.teacher.style.opacity = "0";

      if (this.slides[this.sliderIndex - 1].classList.contains("modules")) {
        setTimeout(() => {
          this.teacher.style.opacity = "1";
          this.teacher.classList.add("fadeInUp");
        }, 3000);
      } else {
        this.teacher.style.opacity = "0";
        this.teacher.classList.remove("fadeInDown");
      }
    } catch (error) {}
  }

  plusIndex(n) {
    this.showSlide((this.sliderIndex += n));
  }

  render() {
   
    if(this.wrapper) {

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

      this.prevOther.forEach((btn)=>{
        btn.addEventListener('click', ()=>{
          this.plusIndex(-1);
          });
      });
  
     this.nextOther.forEach((btn)=>{
        btn.addEventListener('click', ()=>{
          this.plusIndex(1);
          });
      });
    } 

  

    this.showSlide(this.sliderIndex);
  }
}

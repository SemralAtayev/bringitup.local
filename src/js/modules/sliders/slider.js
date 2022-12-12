export default class Slider {
  constructor({  
    triggersSelector = null,
    wrapperSelector = null,
    prev = null,
    next = null,
    activeClass = "",
    animate,
    autoplay,
  } = {}) {
    this.btns = document.querySelectorAll(triggersSelector);
    this.wrapper = document.querySelector(wrapperSelector);
    this.slides = this.wrapper.children;
    this.sliderIndex = 1;
    this.logo = document.querySelectorAll(".original_logo");
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.animate = animate;
    this.autoplay = autoplay;
    this.activeClass = activeClass;
  }
}

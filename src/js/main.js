import MainSlider from "./modules/sliders/mainSlider";
import MiniSlider from "./modules/sliders/miniSlider";
import VideoPopup from "./modules/videoPopup";
import Cards from "./modules/cards";
import Forms from "./modules/form";

window.addEventListener("DOMContentLoaded", () => {
  const slider = new MainSlider({
    triggersSelector: ".next",
    wrapperSelector: ".page",
  });
  slider.render();

  const showUpSlider = new MiniSlider({
    wrapperSelector: ".showup__content-slider",
    prev: ".showup__prev",
    next: ".showup__next",
    activeClass: "card-active",
    animate: true,
  });
  showUpSlider.init();

  const modulesSlider = new MiniSlider({
    wrapperSelector: ".modules__content-slider",
    prev: ".modules__info-btns .slick-prev",
    next: ".modules__info-btns .slick-next",
    activeClass: "card-active",
    animate: true,
    autoplay: true,
  });
  modulesSlider.init();

  const feedSlider = new MiniSlider({
    wrapperSelector: ".feed__slider",
    prev: ".feed__slider .slick-prev",
    next: ".feed__slider .slick-next",
    activeClass: "feed__item-active",
  });
  feedSlider.init();

  const videoPopup = new VideoPopup(".play", ".overlay");
  videoPopup.init();

  new Cards('.officerold', '.officer__card-item', '.plus').init();
  new Cards('.officernew', '.officer__card-item', '.plus').init();

  const mainFromJoin = new Forms();
  mainFromJoin.init();
});

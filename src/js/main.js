import Slider from "./modules/slider";
import VideoPopup from './modules/videoPopup';

window.addEventListener("DOMContentLoaded", () => {
    const slider = new Slider('.next', '.page');
    slider.render();

    const videoPopup = new VideoPopup('.play', '.overlay');
    videoPopup.init();


});
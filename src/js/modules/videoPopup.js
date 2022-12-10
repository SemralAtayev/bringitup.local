export default class VideoPopup {
  constructor(triggerSelector, popupWrapper) {
    this.trigger = document.querySelectorAll(triggerSelector);
    this.popupWrapper = document.querySelector(popupWrapper);
    this.close = this.popupWrapper.querySelector(".close");
  }

  сreatePlayer(url) {
    this.player = new YT.Player("frame", {
      height: "360",
      width: "640",
      videoId: `${url}`,
    });

    this.popupWrapper.style.display = "flex";
  }

  bindPlayer() {
    this.trigger.forEach((btn) => {
      btn.addEventListener("click", (ev) => {
        this.iframe = document.createElement("div");
        this.iframe.setAttribute("id", "frame");
        this.popupWrapper.firstElementChild.appendChild(this.iframe);      

        this.popupWrapper.style.display = "flex";
        this.сreatePlayer(btn.getAttribute("data-url"));
      });
    });
  }

  closePlayer() {
    this.close.addEventListener("click", (e) => {
      e.preventDefault();
      this.popupWrapper.style.display = "none";
      this.player.stopVideo();
      document.querySelector("#frame").remove();
    });
  }

  init() {
    const tag = document.createElement("script");
    
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    this.bindPlayer();
    this.closePlayer();
  }
}

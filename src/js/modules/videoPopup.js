export default class VideoPopup {
  constructor(triggerSelector, popupWrapper) {
    try {
      this.trigger = document.querySelectorAll(triggerSelector);
      this.popupWrapper = document.querySelector(popupWrapper);
      this.close = this.popupWrapper.querySelector(".close");
      this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    } catch (error) {}
  }

  сreatePlayer(url) {
    this.player = new YT.Player("frame", {
      height: "360",
      width: "640",
      videoId: `${url}`,
      events: {
        onStateChange: this.onPlayerStateChange,
      },
    });

    this.popupWrapper.style.display = "flex";
  }

  onPlayerStateChange(state) {
    try {
      const blockedElem = this.activeBtn.closest(
        ".module__video-item"
      ).nextElementSibling;
      const playBtn = this.activeBtn.querySelector("svg").cloneNode(true);

      if (state.data === 0) {
        if (
          blockedElem
            .querySelector(".play__circle")
            .classList.contains("closed")
        ) {
          blockedElem.querySelector(".play__circle").classList.remove("closed");
          blockedElem.querySelector("svg").remove();
          blockedElem.querySelector(".play__circle").appendChild(playBtn);
          blockedElem.querySelector(".play__text").textContent = "play video";
          blockedElem
            .querySelector(".play__text")
            .classList.remove("attention");
          blockedElem.style.opacity = 1;
          blockedElem.style.filter = "none";

          blockedElem.setAttribute("data-disabled", "false");
        }
      }
    } catch (error) {}
  }

  bindPlayer() {
    this.trigger.forEach((btn, i) => {
      try {
        const blockedElem = btn.closest(".module__video-item").nextElementSibling;

        if (i % 2 == 0) {
          blockedElem.setAttribute("data-disabled", "true");
        }
      } catch (e) {}

      btn.addEventListener("click", () => {
        if (!btn.closest('.module__video-item') || btn.closest(".module__video-item").getAttribute("data-disabled") !== "true" ) {
          this.activeBtn = btn;
          if (document.querySelector("iframe#frame")) {
            this.popupWrapper.style.display = "flex";
          }
          this.iframe = document.createElement("div");
          this.iframe.setAttribute("id", "frame");
          this.popupWrapper.firstElementChild.appendChild(this.iframe);
          this.сreatePlayer(btn.getAttribute("data-url"));
        }
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
    if (this.trigger.length > 0) {
      const tag = document.createElement("script");

      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      try {
        this.bindPlayer();
        this.closePlayer();
      } catch (error) {}
    }
  }
}

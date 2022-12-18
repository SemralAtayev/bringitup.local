export default class Cards {
  constructor(cardWrapperSelector, cardItemSelector, triggersSelector) {
    try {
      this.cardWrapper = document.querySelector(cardWrapperSelector);
      this.cardItem = this.cardWrapper.querySelectorAll(cardItemSelector);
      this.trigger = this.cardWrapper.querySelector(triggersSelector);
      this.cardIndex = 0;
      this.lastItem = this.cardItem[this.cardItem.length - 1];
    } catch (error) {}
  }

  bindTriggers() {
    this.trigger.addEventListener("click", () => {
      this.cardItem.forEach((item, i) => {
        if (
          item != this.lastItem &&
          this.cardIndex < this.cardItem.length - 1
        ) {
          this.cardItem[this.cardIndex].style.display = "flex";
        } else if (this.cardIndex > this.cardItem.length - 3) {
          this.lastItem.remove();
        }
      });
      this.cardIndex++;
    });
  }

  init() {
    try {
      this.cardItem.forEach((item) => {
        if (item != this.lastItem) {
          item.classList.add("animated", "fadeIn");
          item.style.display = "none";
        }
      });

      this.bindTriggers();
    } catch (error) {}
  }
}

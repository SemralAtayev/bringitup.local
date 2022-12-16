export default class Forms {
  constructor() {
    this.forms = document.querySelectorAll("form");
    this.inputs = document.querySelectorAll("input");
    this.select = document.querySelectorAll("select");
    this.messagesToShow = {
      loading: "Идет загрузка",
      sucsess: "Спасибо, мы вам перезвоним",
      fail: "Неудачная попытка",
    };
  }

  // clearing all inputs after form sent
  clearAllInputs(inputs) {
    inputs.forEach((input) => {
      input.value = "";
    });
  }

  async sendRequest(url, data) {
    this.fetchRequest = await fetch(url, {
      method: "POST",      
      body:data, 
    });

    return await this.fetchRequest.text();
  }

  init() {
    this.forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        this.messageBlock = document.createElement("div");
        this.messageBlock.classList.add("status");
        form.parentNode.appendChild(this.messageBlock);
        this.messageBlock.innerHTML = this.messagesToShow.loading;

        this.formData = new FormData(form);

        console.log(this.formData);


        this.sendRequest("assets/question.php", this.formData)
          .then((request) => {
            this.messageBlock.innerHTML = this.messagesToShow.sucsess;
            console.log(request);
          })
          .catch((error) => {
            this.messageBlock.innerHTML = this.messagesToShow.fail;
            console.throw(error);
          })
          .finally(()=>{
            this.clearAllInputs(this.inputs);
            this.formData = {};
          });
      });
    });
  }
}

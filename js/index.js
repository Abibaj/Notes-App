class View {
  // _parentElement = document.querySelector(".upload");
  // _successMessage = "Recipe was successfully uploaded :)";

  _switchViewBtn = document.querySelectorAll(".icon-view");
  _noteCard = document.querySelectorAll(".note-card");

  _window = document.querySelector(".new-note__popup");
  _overlay = document.querySelector(".overlay");

  _btnOpen = document.querySelector(".open-window");
  _btnClose = document.querySelector(".close-note__btn");

  constructor() {
    this.addHandlerShowWindow();
    this.addHandlerHideWindow();
    this.addHandlerSwitchView();
    console.log("hey there");
  }

  toggleWindow() {
    this._window.classList.toggle("hidden");
    this._overlay.classList.toggle("hidden");
  }

  toggleView() {
    ["grid", "list"].forEach((s) =>
      this._noteCard.forEach((e) => e.classList.toggle(s))
    );
  }

  toggleViewIcon() {
    this._switchViewBtn.forEach((e) => e.classList.toggle("remove"));
  }

  addHandlerSwitchView() {
    this._switchViewBtn.forEach((e) =>
      e.addEventListener("click", this.toggleView.bind(this))
    );

    this._switchViewBtn.forEach((e) =>
      e.addEventListener("click", this.toggleViewIcon.bind(this))
    );
  }

  addHandlerShowWindow() {
    this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
  }

  addHandlerHideWindow() {
    this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
    this._overlay.addEventListener("click", this.toggleWindow.bind(this));
  }
}

new View();

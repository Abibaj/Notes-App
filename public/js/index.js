class View {
  // _parentElement = document.querySelector(".upload");
  // _successMessage = "Recipe was successfully uploaded :)";

  // _body = document.querySelector(".body");

  _switchViewBtn = document.querySelectorAll(".icon-view");
  _noteCard = document.querySelectorAll(".note-card");

  _window = document.querySelector(".view-note");
  _overlay = document.querySelector(".overlay");

  _btnOpen = document.querySelector(".open-window");
  _btnClose = document.querySelector(".close-note__button");
  _btnConfirmNote = document.querySelector(".btn--confirm");

  _sidebarText = document.querySelectorAll(".sidebar__text");
  _btnToggleMenu = document.querySelector(".toggle-menu");

  _sidebar = document.querySelector(".sidebar");
  _contentBox = document.querySelector(".content");

  _contrastBtn = document.querySelector(".icon--contrast");

  constructor() {}
}

class sidebarView extends View {
  constructor() {
    super();
    this.addHandlerSwitchSidebar();
    this.addHandlerSwitchContrast();
  }

  toggleContrast() {
    // this._body.classList.toggle("light-theme");
    // console.log("Yes, I am working");
  }

  toggleSidebar() {
    this._sidebarText.forEach((e) => {
      e.classList.toggle("remove");
    });
  }

  addHandlerSwitchSidebar() {
    this._btnToggleMenu.addEventListener(
      "click",
      this.toggleSidebar.bind(this)
    );
  }

  addHandlerSwitchContrast() {
    this._contrastBtn.addEventListener("click", this.toggleContrast.bind(this));
  }

  addHandlerSwitchView() {
    this._switchViewBtn.forEach((e) =>
      e.addEventListener("click", this.toggleView.bind(this))
    );

    this._switchViewBtn.forEach((e) =>
      e.addEventListener("click", this.toggleViewIcon.bind(this))
    );
  }
}

new sidebarView();

class contentView extends View {
  constructor() {
    super();
    this.addHandlerShowWindow();
    this.addHandlerHideWindow();
    this.addHandlerSwitchView();
  }

  addHandlerShowWindow() {
    this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
  }

  addHandlerHideWindow() {
    this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
    this._overlay.addEventListener("click", this.toggleWindow.bind(this));
    this._btnConfirmNote.addEventListener(
      "click",
      this.toggleWindow.bind(this)
    );
  }

  addHandlerSwitchView() {
    this._switchViewBtn.forEach((e) =>
      e.addEventListener("click", this.toggleView.bind(this))
    );

    this._switchViewBtn.forEach((e) =>
      e.addEventListener("click", this.toggleViewIcon.bind(this))
    );
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
}

new contentView();

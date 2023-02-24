class View {
  // _parentElement = document.querySelector(".upload");
  // _successMessage = "Recipe was successfully uploaded :)";

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

  constructor() {
    // this.addHandlerShowWindow();
    // this.addHandlerHideWindow();
    // this.addHandlerSwitchView();
    this.addHandlerSwitchSidebar();
    console.log("hey there");
  }

  // toggleWindow() {
  //   this._window.classList.toggle("hidden");
  //   this._overlay.classList.toggle("hidden");
  // }

  // toggleView() {
  //   ["grid", "list"].forEach((s) =>
  //     this._noteCard.forEach((e) => e.classList.toggle(s))
  //   );
  // }

  // toggleViewIcon() {
  //   this._switchViewBtn.forEach((e) => e.classList.toggle("remove"));
  // }

  toggleSidebar() {
    this._sidebarText.forEach((e) => {
      e.classList.toggle("remove");
    });

    // console.log(this._sidebar);
    // this._sidebar.classList.toggle(".sidebar__compressed");
    // this._contentBox.classList.toggle(".content__uncompressed");
  }

  addHandlerSwitchSidebar() {
    this._btnToggleMenu.addEventListener(
      "click",
      this.toggleSidebar.bind(this)
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

  // addHandlerShowWindow() {
  //   this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
  // }

  // addHandlerHideWindow() {
  //   this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
  //   this._overlay.addEventListener("click", this.toggleWindow.bind(this));
  //   this._btnConfirmNote.addEventListener(
  //     "click",
  //     this.toggleWindow.bind(this)
  //   );
  // }
}

new View();

class ContentView extends View {
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

new ContentView();

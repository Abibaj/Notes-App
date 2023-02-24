import { View } from "./view";

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

export default new sidebarView();

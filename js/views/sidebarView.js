import { View } from "./view";

class sidebarView extends View {
  constructor() {
    super();
    this.addHandlerSwitchSidebar();
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

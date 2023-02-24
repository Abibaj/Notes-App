import { View } from "./view";

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

export default new contentView();

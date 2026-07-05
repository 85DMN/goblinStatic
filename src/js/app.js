import NewPicture from "./jumper";

document.addEventListener("DOMContentLoaded", () => {
  const widget = new NewPicture(document.querySelectorAll(".cell"));

  window.widget = widget;

  setInterval(() => {
    widget.addPicture();
  }, 1000);
});

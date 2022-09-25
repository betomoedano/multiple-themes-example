window.addEventListener("load", () => {
  const themePicker = document.getElementById("theme-picker");
  themePicker.addEventListener("change", function () {
    const theme = this.value;
    document.querySelector("html").setAttribute("data-theme", theme);
  });
});

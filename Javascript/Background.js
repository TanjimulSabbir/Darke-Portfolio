const BackgroundColorChange = (color) => {
    const htmlElement = document.getElementById("HtmlElement");
  const newTheme = color; // Change to the desired theme

  htmlElement.dataset.theme = newTheme;
}
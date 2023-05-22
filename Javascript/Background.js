const BackgroundColorChange = (color) => {
    const htmlElement = document.getElementById("HtmlElement");
  const newTheme = color;

  htmlElement.dataset.theme = newTheme;
}
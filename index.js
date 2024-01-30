let colorScheme = [];
const displayScheme = document.getElementById("display-scheme");

document.getElementById("color-btn").addEventListener("click", function () {
  const colorMode = document.getElementById("selected-mode").value;
  const pickedColor = document.getElementById("picked-color").value.slice(1);
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${pickedColor}&mode=${colorMode}&count=5`
  )
    .then((response) => response.json())
    .then((data) => {
      colorScheme = data.colors;
      displayScheme.innerHTML = getColorScheme();
      console.log(colorScheme);
    });
});

function getColorScheme() {
  let html = "";
  colorScheme.forEach((color) => {
    html += renderPalette(color.hex.value);
  });
  return html;
}

function renderPalette(color) {
  return `
<div class="color-palette">
  <div class="color-box" style="background-color:${color};"></div>
  <h3 class="color-value"> ${color} </h3>
</div>`;
}

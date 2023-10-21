function convertTemperature() {
  var celsius = parseFloat(document.getElementById("celsius").value);
  var fahrenheit = (celsius * 9) / 5 + 32;
  document.getElementById("fahrenheit").value = fahrenheit;
}
function getDefaultUnit() {
  let unit = localStorage.getItem("unit");
  if (!unit) {
    localStorage.setItem("unit", "Celsius");
    unit = "Celsius";
  }
  document.getElementById("unitSelect").childNodes.forEach((option) => {
    if (option.value === unit) {
      option.setAttribute("selected", true);
    }
  });
}
function setDefaultUnit() {
  localStorage.setItem("unit", document.getElementById("unitSelect").value);
}

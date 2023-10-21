function convertTemperature() {
  var celsius = parseFloat(document.getElementById("celsius").value);
  var fahrenheit = (celsius * 9/5) + 32;
  fahrenheit = fahrenheit.toFixed(2);
  document.getElementById("fahrenheit").value = fahrenheit;
}

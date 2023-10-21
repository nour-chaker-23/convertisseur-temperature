function convertTemperature() {
  var celsius = parseFloat(document.getElementById("celsius").value);
  var selectedUnit = document.getElementById("unitChosen").value;
  switch (selectedUnit) {
    case "fahrenheit":
      var unitConverted = (celsius * 9) / 5 + 32;
      break;
    case "kelvin":
      var unitConverted = celsius + 273.15;
  }

  document.getElementById("unitValue").value = unitConverted;
}

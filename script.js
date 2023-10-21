function convertTemperature() {
  var celsius = parseFloat(document.getElementById("celsius").value);
  var selectedUnit = document.getElementById("unitChosen").value;
  var warning = document.getElementById("warning");

  if (isNaN(celsius)) {
    // Display a warning message
    warning.textContent = "Invalid input. Please enter valid data.";
    var unitConverted = "";
  } else {
    warning.textContent = "";
    switch (selectedUnit) {
      case "fahrenheit":
        var unitConverted = (celsius * 9) / 5 + 32;
        break;
      case "kelvin":
        var unitConverted = celsius + 273.15;
    }
  }
  document.getElementById("unitValue").value = unitConverted;
}

function copyText() {
  var unitConverted = document.getElementById("unitValue").value;
  if (unitConverted !== "") {
    var Text = document.getElementById("unitValue");
    Text.select();
    navigator.clipboard.writeText(Text.value);
    alert("Value copied successfully");
  }
}

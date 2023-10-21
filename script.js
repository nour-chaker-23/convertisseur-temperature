let histoCoversion = [];

function convertTemperature() {

  var celsius = parseFloat(document.getElementById("celsius").value);
  var fahrenheit = (celsius * 9) / 5 + 32;
  var fahrenheit = (celsius * 9/5) + 32;
  fahrenheit = fahrenheit.toFixed(2);
  document.getElementById("fahrenheit").value = fahrenheit;

  const recordCoversion = `${celsius} °C = ${fahrenheit} °F`;
  histoCoversion.push(recordCoversion);

  updateHistoCoversion();
}


function updateHistoCoversion() {
  const historyElement = document.getElementById("histoCoversion");

  historyElement.innerHTML = "";

  for (const record of histoCoversion) {
    const p = document.createElement("p");
    p.textContent = record;
    historyElement.appendChild(p);
  }
}


  var celsiusInput = document.getElementById("celsius");
  var fahrenheitInput = document.getElementById("fahrenheit");
  var errorMessage = document.getElementById("error-message");
  
  // Réinitialiser le message d'erreur précédent.
  errorMessage.textContent = "";

  var celsius = parseFloat(celsiusInput.value);
  
  if (isNaN(celsius)) {
    errorMessage.textContent = "Veuillez entrer une valeur numérique en degrés Celsius.";
    fahrenheitInput.value = "";
  } else {
    var fahrenheit = (celsius * 9/5) + 32;
    fahrenheitInput.value = fahrenheit;
  }

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

function convertTemperature() {
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

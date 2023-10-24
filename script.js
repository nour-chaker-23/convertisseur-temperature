function convertTemperature() {
  var celsius = parseFloat(document.getElementById("celsius").value);

  if (isNaN(celsius) || celsius > 5) {
    alert("Erreur: Veuillez entrer une valeur valide et inferieure ou egale a 5.");
    return;
  }
  var fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("fahrenheit").value = fahrenheit;
}

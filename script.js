function convertTemperature() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");

  if (!celsiusInput || !fahrenheitInput) {
    console.error("Les éléments d'entrée sont introuvables.");
    return;
  }

  const celsius = parseFloat(celsiusInput.value);

  if (!isNaN(celsius)) {
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2); // Arrondi à deux décimales
  } else {
    fahrenheitInput.value = ""; // Efface la sortie si l'entrée n'est pas un nombre
  }
}

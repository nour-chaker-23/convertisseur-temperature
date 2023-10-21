let histoCoversion = [];

function convertTemperature() {
  var celsius = parseFloat(document.getElementById("celsius").value);
  var fahrenheit = (celsius * 9/5) + 32;
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

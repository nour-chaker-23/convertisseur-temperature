function convertTemperature() {
  var celsius = parseFloat(document.getElementById("celsius").value);
  var fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("fahrenheit").value = fahrenheit;
}

function copyText(){
  var Text = document.getElementById("fahrenheit"); 
  Text.select(); 
  navigator.clipboard.writeText(Text.value); 
}

var unit="fahrenheit";
function convertTemperature() {
  var first = parseFloat(document.getElementById("first field").value);
  if (unit=="fahrenheit"){
    var second = (first * 9/5) + 32;
    document.getElementById("second field").value = second;
  }else{
    var second = (first -32)*(5/9)
    document.getElementById("second field").value = second;
  }
  
}
function change(){
  
  if (unit=="fahrenheit"){
    unit="celsius"
    document.getElementById("second label").innerHTML="Celsius:";
    document.getElementById("first label").innerHTML="Fahrenheit:"
  }else{
    unit="fahrenheit"
    document.getElementById("first label").innerHTML="Celsius:";
    document.getElementById("second label").innerHTML="Fahrenheit:"
  }
}

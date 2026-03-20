const kelvinInput = document.getElementById("kelvinInput");

kelvinInput.addEventListener("input", convertTemp);

function convertTemp(){

let kelvin = Number(kelvinInput.value);

if(kelvin === "" || kelvin < 0){
document.getElementById("celsius").innerText = "--";
document.getElementById("fahrenheit").innerText = "--";
document.getElementById("newton").innerText = "--";
return;
}

let celsius = kelvin - 273;

let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);

let newton = celsius * (33/100);
newton = Math.floor(newton);

document.getElementById("celsius").innerText = celsius + " °C";
document.getElementById("fahrenheit").innerText = fahrenheit + " °F";
document.getElementById("newton").innerText = newton + " N";

}
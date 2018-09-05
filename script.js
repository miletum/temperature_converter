// Written by Beng Hui
// Temperature Converter

//Prompts user to enter temperature
let temperatureInFahr = prompt("Enter temperature in Fahrenheit");

// Checks if user enters a string
while (isNaN(temperatureInFahr)){
    temperatureInFahr = prompt("Error! Please enter a number");
}

// Checks for lower limit
while (temperatureInFahr < -459.67){
    temperatureInFahr = prompt ("Error! Temperature cannot be lower than this value");
}

// converts user-input from Fahrenheit to Celsius
let temperatureCelsius = Math.round(5/9*(temperatureInFahr-32));

// converts user-input from Fahrenheit to Kelvin
let temperatureKelvin = Math.round(5/9*(temperatureInFahr-32)+273);

// logs temperature in Celsius
console.log("The temperature in Celsius is " + temperatureCelsius);

// logs temperature in Kelvin
console.log("The temperature in Kelvin is " + temperatureKelvin);


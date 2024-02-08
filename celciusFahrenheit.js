/**
 * Write two JavaScript functions that convert temperatures
 * to and from Celsius and Fahrenheit.
 * The name of your first function must be celciusToFahrenheit
 * and the name of the second function must be fahrenheitToCelcius.
 * The functions must take one arguments corresponding
 * to the temperature to be converted: temperature.
 * The celciusToFahrenheit function must return
 * the temperature converted from Celcius to Fahrenheit.
 * Round off the returned value to 2 decimal places.
 * The fahrenheitToCelcius function must return
 * the temperature converted from Fahrenheit to Celcius.
 * Round off the returned value to 2 decimal places.
 */

// Write your code here

// End of code

// Do not modify code below this line.
// --------------------------------
function celciusToFahrenheit(celsius) {
    return ((celsius * 9) / 5 + 32).toFixed(2).toString();
  }
  
  const celsiusTemperature = 25;
  const fahrenheitTemperature = celciusToFahrenheit(celsiusTemperature);
  
  console.log(
    `${celsiusTemperature} degrees Celsius is equal to ${fahrenheitTemperature} degrees Fahrenheit.`
  );
  
  function fahrenheitToCelcius(fahrenheit) {
    return (((fahrenheit - 32) * 5) / 9).toFixed(2).toString();
  }
  
  const fahrenheitTemperature_ = 77;
  const celsiusTemperature_ = fahrenheitToCelcius(fahrenheitTemperature_);
  
  console.log(
    `${fahrenheitTemperature_} degrees Fahrenheit is equal to ${celsiusTemperature_} degrees Celsius.`
  );
  module.exports = { celciusToFahrenheit, fahrenheitToCelcius };
  module.exports = { celciusToFahrenheit, fahrenheitToCelcius };
  module.exports = { celciusToFahrenheit,fahrenheitToCelcius };
  
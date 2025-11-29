const convertToCelsius = function(tempFahr) {
  if (tempFahr === 32) return 0;

  let celsius = ((tempFahr - 32) * 5/9);
  let celsiusRounded = Math.round(celsius * 10) / 10;
  return celsiusRounded;
};

const convertToFahrenheit = function(tempCels) {
  if (tempCels === 0) return 32;

  let fahrenheit = (tempCels * 9/5 + 32);
  let fahrenheitRounded = Math.round(fahrenheit * 10) / 10;
  return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

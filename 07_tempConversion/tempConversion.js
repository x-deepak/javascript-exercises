const convertToCelsius = function(fahrenheit) {
  const ans = (fahrenheit-32) * 5/9;
  if (Number.isInteger(ans)) return ans;
  return +ans.toFixed(1);
};

const convertToFahrenheit = function(celsius) {
  const ans = celsius*9/5 +32;
  if (Number.isInteger(ans)) return ans;
  return +ans.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

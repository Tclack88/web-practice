const convertToCelsius = function(F) {
  let C = (F - 32)*5/9;
  if (C == C.toFixed(1)){
    return C;
  }
  return Number(C.toFixed(1));
};

const convertToFahrenheit = function(C) {
  let F = C*9/5 + 32;
  if (F == F.toFixed(1)){
    return F
  }
  return Number(F.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

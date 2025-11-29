const sumAll = function(startNum, endNum) {
  const ERROR_MESSAGE = "ERROR";
  let sum = 0;
  
  if (startNum > endNum) {
    let helper = endNum;
    endNum = startNum;
    startNum = helper;
  }
  if (startNum < 0 || endNum < 0) return ERROR_MESSAGE;
  if (startNum % 1 !== 0 || endNum % 1 !== 0) return ERROR_MESSAGE;
  if (typeof startNum !== "number" || typeof endNum !== "number") return ERROR_MESSAGE;

  for (let i = startNum; i <= endNum; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;

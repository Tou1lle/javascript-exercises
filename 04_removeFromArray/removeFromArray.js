const removeFromArray = function(array, ...removedValues) {
  const newArr = array.filter((checkedValue) => {
    return !(removedValues.includes(checkedValue));
  });

  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

exports.min = function min(array) {
  if (!array || !array.length) {
      return 0;
  } else {
      let minVal = array[0];
      for (let i = 0; i < array.length; i++) {
          if (minVal > array[i]) {
              minVal = array[i];
          }
      }
      return minVal;
  }
};

exports.max = function max(array) {
  if (!array || !array.length) {
      return 0;
  } else {
      let maxVal = array[0];
      for (let i = 0; i < array.length; i++) {
          if (maxVal < array[i]) {
              maxVal = array[i];
          }
      }
      return maxVal;
  }
};

exports.avg = function avg(array) {
  let sum = 0;
  if (!array || !array.length) {
      return 0;
  } else {
      for (let i = 0; i < array.length; i++) {
          sum += array[i];
      }
      let average = sum / array.length;
      return average;
  }
};

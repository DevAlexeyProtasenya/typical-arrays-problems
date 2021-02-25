
exports.min = function min (array) {
  let min = 0;
  if(!!array && array.length !== 0){
    min = array[0];
    array.forEach(element => {
      min = (min > element) ? element : min;
    });
  }
  return min;
}

exports.max = function max (array) {
  let max = 0;
  if(!!array && array.length !== 0){
    max = array[0];
    array.forEach(element => {
      max = (max < element) ? element : max;
    });
  }
  return max;
}

exports.avg = function avg (array) {
  let avg = 0;
  if(!!array && array.length !== 0){
    sum = 0;
    array.forEach(element => {
      sum += element;
    });
    avg = sum / array.length; 
  }
  return avg;
}
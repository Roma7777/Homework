var arr = Array(3, 5, -3, 6, 143, 7, 12, -87, 54, 32, -78, 5, 43),
fMax,
      fMin;
  function getMax(arr) {
    var arrLen = arr.length,
        maxEl = arr[0];
    for (var i = 0; i < arrLen; i++) {
      if (maxEl < arr[i]) {
        maxEl = arr[i];
      }
    }
    return maxEl;
  }
  function getMin(arr) {
    var arrLen = arr.length,
        minEl = arr[0];
    for (var i = 0; i < arrLen; i++) {
      if (minEl > arr[i]) {
        minEl = arr[i];
      }
    }
    return minEl;
  }
  function arraySum(array){ var sum = 0; for(var i = 0; i < array.length; i++){ sum += array[i]; } 
  console.log(sum); } arraySum(arr);
  fMax = getMax(arr);
  fMin = getMin(arr); 
  console.log(fMax, fMin,); 
  document.write("fMax result: " + fMax + " ");
  document.write("fMin result: " + fMin);
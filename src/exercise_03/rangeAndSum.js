export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  var str = [];
  var length=Math.abs(end-start);
  if(start<=end){
    for(let i=0;i<length;i++){
      str.push(start+i);
    }
  }
  else{
    for(let i=0;i<length;i++){
      str.push(start-i);
    }
  }
  return str;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  var answer = 0;
  for (var i=numbers.length-1; i>=0; i--) {
    answer += numbers[i];
  }
  return answer;
}

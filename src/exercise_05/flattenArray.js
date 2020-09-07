export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if(array==undefined||array==null)
  throw new Error('Flatten undefined or null array');
  var answer=[];
  for(let i=0;i<array.length;i++){
    if(typeof array[i] == "number"){
      answer.push(array[i]);
    }
    else{
      for(let j=0;j<array[i].length;j++){
        answer.push(array[i][j]);
      }
    }
  }
  return answer;
}

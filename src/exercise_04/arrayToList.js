export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if(array == undefined)
  throw new Error('Creating list from undefined array');
  if(array == null)
  throw new Error('Creating list from undefined array');
  if(array.length == 0)
  throw new Error('Creating list from empty array');
  var length = array.length;
  var nodes =[];
  for(let i=0;i<length;i++) {
    var node = {};
    node.value = array[i];
    node.next = null;
    nodes.push(node);
  }
  if(length>1){ 
    for(let i=0;i<length-1;i++){
    nodes[i].next=nodes[i+1];
    }
    return nodes[0];
  }
  else
  return nodes[0];
}


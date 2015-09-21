
/* 
Arrays
  mergeSort([5,4,2,6,8,0], function(a, b){ return a > b; });
  // [8,6,5,4,2,0]

Objects
  var arr = [
    {'thing': 'a', 'order': 3},
    {'thing': 'a', 'order': 1},
    {'thing': 'a', 'order': 2}
  ]
  mergeSort(arr, function(a, b){ return a['order'] < b['order'] });
*/

var mergeSort = function(collection, rule){
  if (collection.length <= 1){
    return collection;
  }
  var middle = Math.floor(collection.length / 2);
  var left = collection.slice(0, middle);
  var right = collection.slice(middle, collection.length);
  return merge(mergeSort(left, rule), mergeSort(right, rule), rule);
}

var merge = function(item1, item2, rule){
  var result = [];
  while (item1.length && item2.length){
    if (rule(item1[0], item2[0])){
      result.push(item1.shift());
    } else {
      result.push(item2.shift());
    }
  }
  while (item1.length){
    result.push(item1.shift());
  }
  while (item2.length){
    result.push(item2.shift());
  }
  return result;
}

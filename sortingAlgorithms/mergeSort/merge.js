
/* 
Arrays
  mergeSort([5,4,2,6,8,0], function(a, b){ return a > b; });
  // [8,6,5,4,2,0]

Objects
  var arr = [
    {thing: 'a', order: 3},
    {thing: 'a', order: 1},
    {thing: 'a', order: 2}
  ]
  mergeSort(arr, function(a, b){ return a[order] < b[order] });
*/

var mergeSort = function(collection, rule){

}

var merge = function(item1, item2, rule){
  if (rule(item1, item2)){
    return [item1, item2];
  } else {
    return [item2, item1];
  }
}

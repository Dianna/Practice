# Convert JS mergeSort to Python
# Arrays
#   mergeSort([5,4,2,6,8,0], function(a, b){ return a > b; });
#   // [8,6,5,4,2,0]

# Objects
#   var arr = [
#     {'thing': 'a', 'order': 3},
#     {'thing': 'a', 'order': 1},
#     {'thing': 'a', 'order': 2}
#   ]
#   mergeSort(arr, function(a, b){ return a['order'] < b['order'] });

var mergeSort = function(collection, rule){
  if (collection.length <= 1){
    return collection;
  }
  var middle = Math.floor(collection.length / 2);
  var left = collection.slice(0, middle);
  var right = collection.slice(middle, collection.length);
  return merge(mergeSort(left, rule), mergeSort(right, rule), rule);
}

def merge(item1, item2, rule):
    result = []
    while len(item1) and len(item2):
        if rule(item1[0], item2[0]):
            result.append(item1[0])
            item1.remove(item1[0])
        else:
            result.append(item2[0])
            item2.remove(item2[0])
    while len(item1):
        result.append(item1[0])
        item1.remove(item1[0])
    while len(item2):
        result.append(item2[0])
        item2.remove(item2[0])
    return result;


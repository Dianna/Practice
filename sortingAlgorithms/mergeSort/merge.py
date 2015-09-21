# Convert JS mergeSort to Python
#   arr = [{'thing': 'a', 'order': 3}, {'thing': 'a', 'order': 1}, {'thing': 'a', 'order': 2}]
#   def rule(a, b):
#       return a['order'] < b['order']

# Objects
#   arr = [{'thing': 'a', 'order': 3}, {'thing': 'a', 'order': 1}, {'thing': 'a', 'order': 2}]
#   def rule(a, b):
#       return a['order'] < b['order']

import math

def mergeSort(collection, rule):
    if len(collection) <= 1:
      return collection
    middle = math.floor(len(collection) / 2)
    left = collection[0: middle]
    right = collection[middle: len(collection)]
    return merge(mergeSort(left, rule), mergeSort(right, rule), rule)

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


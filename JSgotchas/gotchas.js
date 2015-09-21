// This file contains a series of JS gotchas

// Determine if a given input (e.g. {'a': 1}) is an object
var isAnObject = function(item){
  return item !== null && !Array.isArray(item) && typeof item === 'object';
}


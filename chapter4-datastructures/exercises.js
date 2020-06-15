// Your code here.
function range(start, end, step = 1){
    // Number + Number + Number -> Array
    // takes starting number, and end number, returns an array containing
    // all nums from start to end (inclusive), by iterating based on step
    // console.log(range(1, 10))
    // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let result = []
    if (step > 0) {
      for (let current_num = start; current_num <= end; current_num += step){
        // Iterates through current_num +1, add to result until end
        result.push(current_num)
      }
    }
    else {
      // case of negative step
      for (let current_num = start; current_num >= end; current_num += step){
        // iterates through negative step
        result.push(current_num)
      }
    }
    
    return result
    // return [] stub
  }
  
  function sum(numbers){
    // ArrayOfNumbers -> Number
    // Takes array of numbers, returns their sum
    let result = 0
    for (let number of numbers) {
      // Iterates through numbers, adds to result
      result += number
    }
    return result
    // return 0 stub
  }
  
  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55

// Your code here.
function reverseArray(array){
    // Array -> Array
    // Takes in an array, produces a NEW array with same elements in inverse order
    let result = []
    for (let element of array){
      // Iterates through original array, unshift to add each successive element
      // to start of result
      result.unshift(element)
    }
    
    return result
  };
  
  function reverseArrayInPlace(array){
    // Array -> Array
    // takes in an array, reverses elements in place of the array
    let reversed = []
    for (let element of array){
      // Iterates through original array, unshift to add each successive element
      // to start of result
      reversed.unshift(element)
    }
    for (let i = 0; i < array.length; i++){
      // replace elems in array with reversed
      array[i] = reversed[i]
    }
  };
  
  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]


// Your code here.

function arrayToList(array){
    // Array -> List
    // Takes an array, returns a list with the same elements
    //console.log(array)
  
    if (array.length == 1){
      // base case
      //console.log("base case")
      return {value: array[0], rest: null}
    }
    else {
      // recursion
      // console.log("recursion")
      return {value: array[0], rest: arrayToList(array.slice(1))}
    }
    
  };
  
  function listToArray(list){
    // List -> Array
    // Takes a list and returns an array with the same elements
    // console.log(listToArray(arrayToList([10, 20, 30])));
    // → [10, 20, 30]
    
    if (list.rest == null){
      return list.value
    }
    else {
      // recursive case
  
      return [list.value].concat(listToArray(list.rest))
    }
  
  };
  
  function prepend(elem, list){
    // Element + List -> List
    // Takes element and list, creates a new list with element infront
    if (list == null){
      // base case
      return {value: elem, rest: list}
    }
    else {
      // recursive case
      //console.log(elem)
      return {value: elem, rest: prepend(list.value, list.rest)}
    }
  }
  
  function nth(list, number){
    // List + Number -> Element || undefined
    // Takes a list and number, returns the element at the given position
    // in the list based on number, if it doesnt exist returns undefined
    if (list == null){
      // base case undefined -- failed to get nth position
      return undefined
    }
    else if (number == 0) {
      return list.value
    }
    else {
      // reduce number and reduce list at the same tim
      return nth(list.rest, number-1)
    }
    
  }
  
  console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20
  console.log(nth(arrayToList([10, 20, 30]), 2));
  console.log(nth(arrayToList([10, 20, 30]), 3));
// Your code here.
function deepEqual(value1, value2){
  // Value + Value -> Boolean
  // Takes 2 values, returns true if they are the same value
  // or are objects with the same properties, where the values of the properties
  // are equal
  if (typeof value1 == "object" & typeof value2 == "object"){
    // both objects
    //console.log("both objs")
    if (value1 == null || value2 == null){
      console.log("either one is null")
      return false
    }
    let value1keys = Object.keys(value1)
    let value2keys = Object.keys(value2)
    if (value1keys.length != value2keys.length){
      return false
    }
    else {
      for (let i = 0; i <= value1keys.length; i++){
        if (deepEqual(value1[i], value2[i]) == false){
            return false
            }
      }
    }


    for (let key of value1keys){
      //
      // console.log(value1[key])
      return deepEqual(value1[key], value2[key])

    }

  }
  else {
    // if either one isn't an object
    return value1 === value2
  }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(1, 1));
//branch1
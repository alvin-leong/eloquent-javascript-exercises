let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]
console.log(arrays.reduce((a, b) => a.concat(b)))

// Your code here.
function loop(value, test_func, update_func, body_func){
    // Value + Test Function + Update Function + Body Function - > Boolean
    // Run test function on current val, stop if false
    // then run body func to get current val
    // run udate function to create new val, restart from beginning
    if (test_func(value) == false) {
      return false
    }
    body_func(value)
    new_val = update_func(value)
    loop(new_val, test_func, update_func, body_func) 
  }
  
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

function every1(array, test) {
    // Your code here.
    // Array + TestFunction -> Boolean
    // Returns true if test function returns true for EVERY element in array
    for (let elem of array) {
      if (test(elem) == false) {
        return false
      }
    }
    return true
  
  }
  
  function every(array, test) {
    // Your code here.
    // Array + TestFunction -> Boolean
    // Returns true if test function returns true for EVERY element in array
    // returns false if a single one is false
    
    return array.some(element => !test(element))
  
  
  }
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true
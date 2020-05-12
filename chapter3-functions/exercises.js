// Your code here.
function min(a, b){
    // Number + Number -> Number
    // looks at two numbers, returns smallest
    if (a<b){
      return a
    }
    else {
      return b
    
    }
    
    //return 0 stub
  };

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Your code here.
function isEven(number){
    // Number -> Boolean
    // Takes a Positive, Whole number, returns true if even
    if (number == 0){
      return true
    }
    else if (number == 1){
      return false
    }
    else if (number <0){
      return "Number less than 0"
    }
    else{
      return isEven(number-2)
    }
    
    //return true stub
  
  }
  
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → ??

  // Your code here.
function countBs(string){
    // String -> Number
    // Takes a string, counts how many uppercase "B"s are in the string
    let count = 0
    for (let iter = 0; iter < string.length; iter++) {
      if (string[iter] == "B") {
        count += 1
      }
    }
    return count
  }
  
  function countChar(string, letter){
    // String -> Number
    // Takes a string, counts how many uppercase "B"s are in the string
    let count = 0
    for (let iter = 0; iter < string.length; iter++) {
      //console.log(string[iter])
      if (string[iter] == letter) {
        count += 1
      }
    }
    return count
  }
         
  //for (let count = 0; count < exponent; count++) {
  //result *= base;
  //}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
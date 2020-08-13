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

  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }
  
  function textScriptsList(text) {
    // Text -> String
    // takes in a text and outputs the name of the script with most chars
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.name : "none";
    }).filter(({name}) => name != "none");
    let sortedScripts = scripts.sort((a, b) => (a.count < b.count) ? 1 : -1);
    return sortedScripts[0].name
  
  }
  
  console.log(textScriptsList('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
  
  function dominantDirection(text) {
    // Your code here.
    // Text -> direction property
    // Takes in a text, finds the majority of chars in that text snippet, 
    // returns the direction
    let topScript = textScriptsList(text)
    let scriptObject = SCRIPTS.filter(script => script.name == topScript) 
    
    return scriptObject.map(s => s.direction)[0]
  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl
  
  console.log(("Hey, مساء الخير")[6].codePointAt())
  //codePointAt(خ)
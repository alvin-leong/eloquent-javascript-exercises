// Your code here (and the code from the previous exercise)
class Group {
    // Your code here.
    constructor(iterable) {
      this.values = []
      for (var item of iterable) {
        //
        this.values.push(item);
      }
    };
    
    has(value) {
      /// checks if group already has value
      if (this.values.indexOf(value) >= 0) {
        return true
      }
      else {
        return false
      }
    };
    
    add(value) {
      ///
      if (this.has(value) == false) {
        this.values.push(value)
      }
      else {
        return
      }
    };
    
    delete(value) {
      ///
      this.values = this.values.filter(existing_value => existing_value != value)
    };
  
    
    [Symbol.iterator]() {
      // returns new instance of iterator class for that group
      return new GroupIterator(this)
    };
    
    static from(iterable) {
      return new Group(iterable)
      };
  }
  
  class GroupIterator {
    // has next function to track whether current val is done for Group
    constructor(Group) {
      // tracks position of given Group's values
      this.position = 0
      this.group = Group
    }
    
    next() {
      // iterates checks if iteration is all done if not, adds one and returns
      let position = this.position
      let values = this.group.values.slice(position)

      if (this.position == this.group.values.length) {
        // done
        return {done: true}
      }
      
      let value = {
        // get value
        value: values[0]
      }
      this.position++
      return {value, done:false}
    }
  }
  
  
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c

let map = {one: true, two: true, hasOwnProperty: true};
hasOwnProperty.call(map, "one")
// Fix this call
console.log(hasOwnProperty.call(map, "one"));
// → true
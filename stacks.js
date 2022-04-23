//Functions: push, pop, peek, length
//The array can be used as a stack

let letters = [];
let word = "racecar";
let rWord = "";

//Put the letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

//Pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rWord += letters.pop();
}

rWord === word ? `${word} is palindrome` : `${word} is NOT palindrome`;

//Creating a Stack
let Stack = function () {
  this.count = 0;
  this.storage = {};

  //Adds a value onto the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  //Removes and returns the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  //Size
  this.size = function () {
    return this.count;
  };

  //Peek
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

let stack = new Stack();

stack.push(1);
stack.pop(2);
console.log(stack.size());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.peek());

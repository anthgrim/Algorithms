//Sets don't contain duplicate items
//Values don't have particular order

function mySet() {
  //The collection will hold the set
  let collection = [];

  //This method will check for the presence of an element and return true or false
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  //This method will return all the values in the set
  this.values = function () {
    return collection;
  };

  //This method will add an element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  //This method will remove an element from the set
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  //This method will return the size of the collection
  this.size = function () {
    return collection.length;
  };

  //This methodwillreturn the union of two sets
  this.union = function (otherSet) {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();

    firstSet.forEach((e) => {
      unionSet.add(e);
    });

    secondSet.forEach((e) => {
      unionSet.add(e);
    });

    return unionSet;
  };

  //This method will return the intersection of to sets as a new set
  this.intersection = function (otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();

    firstSet.forEach((e) => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });

    return intersectionSet;
  };

  //This method returns the difference of two sets as a new set
  this.difference = function (otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();

    firstSet.forEach((e) => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });

    return differenceSet;
  };

  //This method returns if the set is a subset of another set
  this.subset = function (otherSet) {
    let firstSet = this.values();

    return firstSet.every((value) => {
      return otherSet.has(value);
    });
  };
}

let setA = new mySet();
let setB = new mySet();

setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("e");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());

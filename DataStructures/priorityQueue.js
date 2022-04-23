function PriorityQueue() {
  let collection = [];

  this.printCollection = function () {
    console.log(collection);
  };

  this.enqueue = function () {
    if (this.isEmpty()) {
      onselectionchange.push(element);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }

      if (!added) {
        collection.push(element);
      }
    }
  };

  this.dequeue = function () {
    let value = collection.shift();
    return value[0];
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };
}

let pQ = new PriorityQueue();

pQ.enqueue(["JC", 1]);
pQ.enqueue(["KFC", 2]);
pQ.enqueue(["BK", 2]);
pQ.enqueue(["MC", 3]);

pQ.printCollection();

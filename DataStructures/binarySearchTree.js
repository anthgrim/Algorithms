//min values to the left
//max values to the right

//left_sub < root < rith_sub

//Create a class node
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

//Create the Binary Search Tree Class
class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;

    //If the initial data is empty. Then make the passed node the root
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      //We create the function Search Tree and pass the root node in that same function
      const searchTree = function (node) {
        //Checking if the new data is less than the root then add to the left
        if (data < node.data) {
          //If nothing to the left create a new node
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            //if there's an existing node to the left, add recursion passing the left side of the node in the searchTree function
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          //Checking if data is greater than the root then add to right
          if (node.right === null) {
            //if nothing to the right create a new node
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            //If there's an exisiting node to the right, add recursion passing the right side of th enode in the searchTree function
            return searchTree(node.right);
          }
        } else {
          //return null if the data is equal to the root
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    //Min values are always to the left
    let current = this.root;

    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  }

  findMax() {
    //Max values are always to the right
    let current = this.root;

    while (current.right !== null) {
      current = current.right;
    }

    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.right;
      } else {
        current = current.left;
      }

      if (current === null) {
        return null;
      }
    }

    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }

      if (data === node.data) {
        //node has no children
        if (node.left === null && node.right === null) {
          return null;
        }

        //node has no left child
        if (node.left === null) {
          return node.right;
        }

        //node has no right child
        if (node.right === null) {
          return node.left;
        }

        //node has two children
        let tempNode = node.right; //because is the max value in the current node
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  findMinHeight(node = this.root) {
    if (node === null) {
      return -1;
    }

    let left = this.findMinHeight(node.left);
    let right = this.findMaxHeight(node.right);

    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  findMaxHeight(node = this.root) {
    if (node === null) {
      return -1;
    }

    let left = this.findMinHeight(node.left);
    let right = this.findMaxHeight(node.right);

    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  inOrder() {
    if (this.root === null) {
      return null;
    }

    let result = new Array();

    function traverseInOrder(node) {
      node.left && traverseInOrder(node.left);
      result.push(node.data);
      node.right && traverseInOrder(node.right);
    }

    traverseInOrder(this.root);
    return result;
  }

  preOrder() {
    if (this.root === null) {
      return null;
    }
    let result = new Array();

    function traversePreOrder(node) {
      result.push(node.data);
      node.left && traversePreOrder(node.left);
      node.right && traversePreOrder(node.right);
    }

    traversePreOrder(this.root);
    return result;
  }

  postorder() {
    if (this.root === null) {
      return null;
    }
    let result = newArray();

    function traversePostOrder(node) {
      node.left && traversePostOrder(node.left);
      node.right && traversePostOrder(node.right);
      result.push(node.data);
    }

    traversePostOrder(this.root);
    return result;
  }

  levelOrder() {
    let result = [];
    let Q = [];

    if (this.root !== null) {
      Q.push(this.root);

      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);

        if (node.left !== null) {
          Q.push(node.left);
        }

        if (node.right !== null) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}

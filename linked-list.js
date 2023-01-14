class Node {
  constructor({ value = null, nextNode = null }) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
    this.length = 0;
  }

  // Adds a new node to the end of the list.
  append(value) {
    const tail = this.tail();
    if (tail) {
      tail.nextNode = new Node({ value, nextNode: null });
      this.length++;
    } else {
      this.prepend(value);
    }
  }

  // Adds a new node to the start of the list.
  prepend(value) {
    if (!this.head()) {
      this.headNode = new Node({ value, nextNode: null });
    } else {
      this.headNode = new Node({ value, nextNode: this.head() });
    }

    this.length++;
  }

  // Returns the total number of nodes in the list.
  size() {
    return this.length;
  }

  // Returns the first node in the list.
  head() {
    return this.headNode;
  }

  // Returns the last node in the list.
  tail() {
    let currentNode = this.head();

    while (currentNode && currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  // Returns the node at the given index.
  at(index) {
    if (!Number.isInteger(index)) throw "Integer expected";

    if (index < 0 || index > this.size() - 1) return null;

    let currentIndex = 0;
    let currentNode = this.head();

    while (currentNode) {
      if (currentIndex === index) break;

      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return currentNode;
  }

  // Removes the last node from the list.
  pop() {
    let currentNode = this.head();

    if (!currentNode) return;

    if (!currentNode.nextNode) {
      this.headNode = null;
      return;
    }

    while (currentNode) {
      if (!currentNode.nextNode.nextNode) {
        currentNode.nextNode = null;
      }

      currentNode = currentNode.nextNode;
    }

    this.length--;
  }

  //   Returns true if the passed in value is in the list and false otherwise.
  contains(value) {
    let currentNode = this.head();
    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  //   Returns the index of the node containing the passed in value, or null if not found.
  find(value) {
    let currentIndex = 0;
    let currentNode = this.head();
    while (currentNode) {
      if (currentNode.value === value) return currentIndex;

      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    return null;
  }

  // Returns a string representation of the linked list.
  toString() {
    let outputString = "HEAD -> ";
    let currentNode = this.head();

    while (currentNode) {
      outputString += `( ${currentNode.value} )`;
      outputString += " -> ";
      currentNode = currentNode.nextNode;
    }

    outputString += currentNode;

    return outputString;
  }

  // Inserts a new node with the provided value at the given index.
  insertAt(index, value) {
    if (!Number.isInteger(index)) throw "Integer expected";
    if (index < 0) throw "Index cannot be negative";
    if (index > this.size())
      throw `
        Current list length is ${this.size()}.
        Therefore, Index argument must be ${this.size()} or lower in order to avoid the insertion of empty nodes.
      `;

    if (index === this.size()) {
      this.append(value);
      return;
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index < this.size()) {
      const previousNode = this.at(index - 1);
      previousNode.nextNode = new Node({
        value,
        nextNode: previousNode.nextNode,
      });
      this.length++;
    }
  }

  //   Removes the node at the given index.
  removeAt(index) {
    if (!Number.isInteger(index)) throw "Integer expected";
    if (index < 0 || index > this.size() - 1) throw "No node at that index";

    if (index === this.size() - 1) {
      this.pop();
      return;
    }

    if (index === 0) {
      this.headNode = this.headNode.nextNode;
      return;
    }

    const previousNode = this.at(index - 1);
    previousNode.nextNode = previousNode.nextNode.nextNode;
  }
}

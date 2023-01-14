# Linked Lists: :chains:
This project is part of the CS section of the NodeJS path in [The Odin Project](https://www.theodinproject.com/).<br>
The assignment can be seen [here](https://www.theodinproject.com/lessons/javascript-linked-lists#assignment).

## Description:
Implementation of  a linked list class in JavaScript containing the following methods:
 - <b>`append(value)`</b> adds a new node containing passed in value to the end of the list.
 - <b>`prepend(value)`</b> adds a new node containing the passed in value to the start of the list.
 - <b>`size()`</b> returns the total number of nodes in the list.
 - <b>`head()`</b> returns the first node in the list.
 - <b>`tail()`</b> returns the last node in the list.
 - <b>`at(index)`</b> returns the node at the given index.
 - <b>`pop()`</b> removes the last element from the list.
 - <b>`contains(value)`</b> returns true if the list contains the passed in value, and false otherwise.
 - <b>`find(value)`</b> returns the index of the node containing the passed in value, or null if not found.
 - <b>`toString()`</b> returns a string representation of the linked list.
 - <b>`insertAt(index, value)`</b> inserts a new node with the provided value at the given index.
 - <b>`removeAt(index)`</b> removes the node at the given index.


## Usage:
You can try the LinkedList class either via the <b>browser</b> or <b>Node</b>.<br>
 - To try it in the browser, follow [these instructions](https://fedelopez17.github.io/linked-lists/).<br>
 - Otherwise, to try it with Node, use the `test-methods.js` file to instantiate the class and call its methods,<br>
and then run `node [path to test-methods.js]` to see the resulting output in the terminal.

Tips:
 - Remember to use the `toString()` method often so that you can see what's going on.
 - If you're using Node, consider using [Nodemon](https://www.npmjs.com/package/nodemon) to re-run `test-methods.js` everytime you try a new method.

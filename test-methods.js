const LinkedList = require("./linked-list.js");

// See the methods available and usage instructions here: https://github.com/FedeLopez17/linked-lists/blob/main/README.md

const felines = new LinkedList();
felines.append("Jaguar");
felines.append("Leopard");
felines.append("Domestic Cat");
console.log(felines.toString());
felines.insertAt(1, "Tiger");
felines.prepend("Cougar");
console.log(felines.toString());

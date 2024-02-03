import { LinkedList } from "./LinkedList.js";

const list = LinkedList();

list.append("world");
list.append("bye");

console.log("Head is ", list.head());
console.log(list.toString());
// 

list.prepend("hello");
list.prepend("before");
// 
console.log("Head is ", list.head());
console.log(list.toString());

console.log("Th size of the list is", list.size());

console.log("tail of the list is", list.tail());

console.log("Value at index 0 is", list.at(0));
console.log("Value at index 10 is", list.at(10));
console.log("Value at index -10 is", list.at(-10));
console.log("Value at index 3 is", list.at(3));


console.log("Before pop", list.toString());
list.pop()
console.log("After pop", list.toString());

console.log("List contains before?", list.contains("before"));
console.log("List contains hello?", list.contains("hello"));
console.log("List contains world?", list.contains("world"));
console.log("List contains hello world?", list.contains("hello world"));


console.log("Index of before is :", list.find("before"))
console.log("Index of hello is :", list.find("hello"))
console.log("Index of world is :", list.find("world"))
console.log("Index of hello world is :", list.find("hello world"))


// Extra Credits
console.log(list.toString());

list.insertAt("value", 3);
console.log(list.toString());


console.log(list.removeAt(0));
console.log(list.toString());

console.log(list.removeAt(2));
console.log(list.toString());

console.log(list.removeAt(0));
console.log(list.toString());





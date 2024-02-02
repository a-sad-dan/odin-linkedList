import LinkedList from "./LinkedList.js";

const list = new LinkedList();
console.log("Head of the linked list is : ", list.head());
console.log("size of the linked list is : ", list.size());

list.prepend("item -1");
console.log(list.toString());

list.append("item 0");
console.log(list.toString());

list.append("item 1");
console.log(list.toString());


list.prepend("item -2");
console.log(list.toString());

console.log("size of the linked list is : ", list.size());

console.log("Head of the linked list is : ", list.head());

console.log("Tail of the linked list is : ", list.tail());


console.log("Element at position 0 is", list.at(0));
console.log("Element at position 2 is", list.at(2));
console.log("Element at position 3 is", list.at(3));

console.log("Element at position -2 is", list.at(-2));
console.log("Element at position 10 is", list.at(10));

console.log("list before pop ", list.toString());

list.pop();
console.log("list after pop ", list.toString());


console.log("Does list contain item -1 :", list.contains("item -1"));
console.log("Does list contain item 0 :", list.contains("item 0"));
console.log("Does list contain item -2 :", list.contains("item -2"));

console.log("Does list contain item -4 :", list.contains("item -4"));


console.log("Index of item 0 is", list.find("item 0"));
console.log("Index of item -2 is", list.find("item -2"));

console.log("Index of item 10 is", list.find("item 10"));

console.log(list.toString());

// console.log("inserting 'monish' at index 5",list.insertAt(5,"monish"));
list.insertAt(1, "danish");
console.log("inserting 'danish' at index 1\n", list.toString());

list.insertAt(0, "hello");
console.log("inserting 'hello' at index 0\n", list.toString());

list.insertAt(5, "monish");
console.log("inserting 'monish' at index 5\n", list.toString());

list.removeAt(2);
console.log(list.toString());


list.removeAt(4);
console.log(list.toString());

list.removeAt(0);
console.log(list.toString());
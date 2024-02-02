import Node from "./Node.js";

export default class LinkedList {
    constructor() {
        this.listHead = null;
    }

    // methods
    append(value) {
        if (this.listHead == null) {
            this.listHead = new Node(value);
        }
        else {
            let temp = this.listHead;;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = new Node(value);
        }
    }

    prepend(value) {
        let temp = this.listHead;
        this.listHead = new Node(value);
        this.listHead.next = temp;
    }

    size() {
        let temp = this.listHead;
        let count = 0;
        while (temp != null) {
            count += 1;
            temp = temp.next;
        }
        return count;
    }

    head() {
        if (this.listHead == null) return null;
        return this.listHead.value;
    }

    tail() {
        let temp = this.listHead;
        if (temp == null) return null;
        while (temp.next != null) {
            temp = temp.next;
        }
        return temp.value;
    }

    at(index) {
        if (index < 0 || index > this.size()) return null
        let temp = this.listHead;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
            return temp.value;
        }
    }

    pop() {
        let temp = this.listHead;
        let prev = null;
        while (temp.next != null) {
            prev = temp;
            temp = temp.next;
        }
        prev.next = null;
        return temp;
    }

    contains(value) {
        let temp = this.listHead;
        while (temp != null) {
            if (temp.value == value) return true
            temp = temp.next;
        }
        return false;
    }

    find(value) {
        let index = 0;
        let temp = this.listHead;
        while (temp != null) {
            if (temp.value == value) { return index }
            index += 1;
            temp = temp.next;
        }
        return null;
    }

    toString() {
        let temp = this.listHead;
        let str = ""
        while (temp != null) {
            str += `(${temp.value}) --> `;
            temp = temp.next;
        }
        return str + "null";
    }

    // extra credit methods
    insertAt(index, value) {
        //list index out of range
        if (index > this.size() || index < 0) { console.error("Index out of range"); return }

        // index = 0
        if (index == 0) return this.prepend(value);

        // find the og node at the index
        let temp = this.listHead;
        let prev;
        for (let i = 0; i < index; i++) {
            prev = temp;
            temp = temp.next;
        }
        // next node = new node with value
        const newNode = new Node(value);
        prev.next = newNode;
        // set new node next as og node
        newNode.next = temp;
    }

    removeAt(index) {
        if (index >= this.size() || index < 0) { return console.error("List index out of range") }
        if (index == this.size() - 1) return this.pop();
        if (index == 0) return this.listHead = this.listHead.next;
        // find node,previous node and next node at index
        let temp = this.listHead;
        let prev = null;
        for (let i = 0; i < index; i++) {
            prev = temp;
            temp = temp.next
        }
        let next = temp.next;
        prev.next = next;
        return temp;
    }
}
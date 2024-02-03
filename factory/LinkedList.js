import { Node } from "./Node.js";

export const LinkedList = () => {
    let listHead = null;

    const append = (value) => {
        let curr = listHead;
        if (curr === null) return listHead = Node(value);
        while (curr.next != null) curr = curr.next
        curr.next = Node(value);
    }

    const prepend = (value) => {
        if (listHead === null) return listHead = Node(value);
        const newNode = Node(value);
        let temp = listHead;
        listHead = newNode;
        newNode.next = temp;
        return;
    }

    const size = () => {
        var curr = listHead;
        let count = 0;
        while (curr != null) {
            count += 1;
            curr = curr.next;
        }
        return count;
    }

    const head = () => {
        if (listHead == null) return null
        return listHead.value
    }

    const tail = () => {
        let curr = listHead;
        if (curr == null) return null;
        while (curr.next != null) curr = curr.next;
        return curr.value;
    }

    const at = (index) => {
        // loop to the index
        if (index < 0 || index >= size()) return null;
        let curr = listHead;
        for (let i = 0; i < index; i++) curr = curr.next;
        return curr.value
    }

    const pop = () => {
        let curr = listHead;
        if (curr == null) return console.error("List Empty");
        let prev = listHead;
        while (curr.next != null) {
            prev = curr;
            curr = curr.next
        }
        if (prev == listHead) return listHead = null;
        prev.next = null;
        return curr.value;
    }

    const contains = (value) => {
        let curr = listHead;
        while (curr != null) {
            if (curr.value === value) return true;
            curr = curr.next;
        }
        return false;
    }

    const find = (value) => {
        let curr = listHead;
        let index = 0;
        while (curr != null) {
            if (curr.value == value) return index;
            index += 1;
            curr = curr.next;
        }
        return null;
    }

    const toString = () => {
        let curr = listHead;
        let str = "";
        while (curr != null) {
            str += `(${curr.value}) --> `
            curr = curr.next;
        }
        return str + "null";
    }

    // Extra credits

    const insertAt = (value, index) => {
        // find element at index
        let curr = listHead;
        if (index < 0 || index > size()) return console.error("Index out of range");
        // if (index == 0) return prepend(value);
        if (index == size()) return append(value);
        let prev;
        for (let i = 0; i < index; i++) {
            prev = curr;
            curr = curr.next;
        }
        const node = Node(value);
        prev.next = node;
        node.next = curr;
    }

    const removeAt = (index) => {
        //edge case - index out of range
        if (index < 0 || index >= size()) return console.error("Index out of range")

        //edge case - index last element
        if (index == size() - 1) return pop();

        //edge case - index first element
        if (index == 0) {
            let removed = listHead;
            listHead = listHead.next;
            return removed.value;
        }

        let curr = listHead;

        let prev = null;
        for (let i = 0; i < index; i++) {
            prev = curr
            curr = curr.next;
        }
        console.log("prev is ", prev)
        // edge case index = 0
        prev.next = curr.next;
        return curr.value
    }


    return { append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt, removeAt }
}

//todo - Refactor
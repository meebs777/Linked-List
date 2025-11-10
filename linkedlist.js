export function linkedList() {
    let head = null;
    let tail = null;
    const append = (value) => {
        const node = Node(value);
        if (head === null) {
            head = node;
            tail = node;
        } else if (head.nextNode === null) {
            head.nextNode = node;
            tail = node;
        } else {
            tail.nextNode = node;
            tail = node;
        }
    }

    const prepend = (value) => {
        if (head === null) append(value);
        else {
            const node = Node(value);
            node.nextNode = head;
            head = node;
        }
    }

    const size = () => {
        if (head === null) return 0;
        let count = 0;
        let curr = head;
        while (curr.nextNode !== null) {
            count++;
            curr = curr.nextNode;
        }
        count++;
        return count;
    }

    const at = (index) => {
        if (head === null) return null;
        if (index > size() - 1) return "Doesn't exist";
        let curr = head;
        for (let indx = 0; indx < index; indx++) {
            curr = curr.nextNode;
        }
        return curr;
    }

    const pop = () => {
        if (head === null) return;
        if (head.nextNode === null) {
            head = null;
            tail = null;
            return
        }
        let curr = head;
        let prev = curr;
        while (curr.nextNode !== null) {
            prev = curr;
            curr = curr.nextNode;
        }
        prev.nextNode = null;
        tail = prev;
    }

    const contains = (value) => {
        if (head === null) return false;
        let curr = head;
        while (curr.nextNode !== null) {
            if (curr.value === value) {
                return true;
            }
            curr = curr.nextNode;
        }
        //Check last node
        if (curr.value === value) {
                return true;
        }
        return false;

    }

    const find = (value) => {
        if (head === null) return null;
        let curr = head;
        let count = 0;
        while (curr.nextNode !== null) {
            
            if (curr.value === value) {
                return count;
            }
            count++;
            curr = curr.nextNode;
        }
        //Check last node
        if (curr.value === value) {
            return count;
        }
        return null;
    }

    const toString = () => {
        let message = "";
        if (head === null) {
            return "null"
        }
        let curr = head;
        while (curr.nextNode !== null) {
            message += `(${curr.value}) -> `
            curr = curr.nextNode;
        }
        message += `(${curr.value}) -> `
        message += " null";
        return message;
    }
    
    const headNode = () => { return head; }
    const tailNode = () => { return tail; }
    return { headNode, append, toString, prepend, tailNode, size, pop, at, contains, find }
}

export function Node(value = null,nextNode = null) {
    return {value,nextNode}
}
const list = linkedList();

list.prepend("one");
list.append("two")
list.append("three")
list.append("four")
list.append("five")
list.prepend("six")


console.log(list.toString())
console.log(list.headNode())
console.log(list.tailNode())
console.log(list.size())
console.log(list.at(6))
console.log(list.find("five"))


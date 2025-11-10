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

        }
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
    return{headNode,append,toString,prepend,tailNode}
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

console.log(list.toString())
console.log(list.headNode())
console.log(list.tailNode())


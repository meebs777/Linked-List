export function linkedList() {
    let head = null;
    const append = (value) => {
        const node = Node(value);
        if (head === null) {
            head = node;
        } else if (head.nextNode === null) {
            head.nextNode = node;
        } else {
            //Set end to point to node after head
            let end = head.nextNode;
            //Traverse through until at end of list with nextNode null
            while (end.nextNode !== null) {
                end = end.nextNode;
            }
            //Set end to point to new node
            end.nextNode = node;
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

    return{append,toString}
}

export function Node(value = null,nextNode = null) {
    return {value,nextNode}
}
const list = linkedList();

list.append("one");
list.append("two")
list.append("three")
list.append("four")
list.append("five")
console.log(list.toString())


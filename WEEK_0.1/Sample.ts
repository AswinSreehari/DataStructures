class Node {
    value: number;
    next: Node | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: Node | null;
    size: number;

    constructor() {
        this.head = null;
        this.size =  0;
    }

    isEmpty(): boolean {
        return this.size ===  0;
    }

    getSize(): number {
        return this.size;
    }

    prepend(value: number): void {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value: number): void {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev && prev.next) {  
                prev = prev.next;
            }
            if (prev) {  
                prev.next = node;
            }
        }
        this.size++;
    }

    insert(value: number, index: number): void {
        if (index <  0 || index > this.getSize()) {
            console.log("Inserting not possible!!");
            return;
        }
        if (index ===  0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i =  0; i < index -  1; i++) {
                prev = prev!.next;
            }
            node.next = prev!.next;
            prev!.next = node;
            this.size++;
        }
    }

    removeFrom(index: number): Node | null {
        if (index <  0 || index >= this.getSize()) {
            return null;
        }
        let removedElem: Node | null;
        if (index ===  0) {
            removedElem = this.head;
            this.head = this.head!.next;
        } else {
            let prev = this.head;
            for (let i =  0; i < index -  1; i++) {
                prev = prev!.next;
            }
            removedElem = prev!.next;
            prev!.next = removedElem!.next;
        }
        this.size--;
        return removedElem;
    }

    removeEnd(): void {
        if (this.isEmpty()) {
            console.log("Linked list is empty!!");
            return;
        }
        if (this.head === null) {
            this.head = null;
            this.size =  0;
        } else {
            let curr = this.head;
            let prev: Node | null = null;
            while (curr!.next) {
                prev = curr;
                curr = curr.next;
            }
            prev!.next = null;
            this.size--;
        }
    }

    removeFirst(): void {
        if (this.isEmpty()) {
            console.log("LinkedList is Empty!!");
            return;
        }
        this.head = this.head!.next;
        this.size--;
    }

    toArray(): number[] {
        if (this.isEmpty()) {
            return [];
        }
        let arr: number[] = [];
        let curr = this.head;
        while (curr) {
            arr.push(curr.value);
            curr = curr.next;
        }
        return arr;
    }

    print(): void {
        if (this.isEmpty()) {
            console.log("The list is Empty!!");
        } else {
            let curr = this.head;
            let values = '';
            while (curr) {
                values += `${curr.value}  `;
                curr = curr.next;
            }
            console.log(values);
        }
    }
}

const list = new LinkedList();
console.log("List is Empty ?", list.isEmpty());
console.log('List Size : ', list.getSize());
list.append(10);
list.print();
list.append(20);
list.append(30);
list.print();
list.insert(40,  2);
list.print();
list.insert(50,  4);
list.print();

console.log(list.toArray());

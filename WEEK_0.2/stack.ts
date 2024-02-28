class Stack {
     items: number[];

    constructor() {
        this.items = [];
    }

    push(value: number): void {
        this.items.push(value);
    }

    pop(): number | undefined {
        return this.items.pop();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    peek(): number | undefined {
        return this.items[this.items.length - 1];
    }

    size(): number {
        return this.items.length;
    }

    print(): void {
        if (this.isEmpty()) {
            console.log("Stack is Empty");
        } else {
            console.log(this.items.toString());
        }
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

stack.pop();
console.log(stack.isEmpty());
console.log(stack.size());
stack.print();

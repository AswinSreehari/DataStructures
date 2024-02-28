class QueueUsingStack {
     stack1: number[];
     stack2: number[];

    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(value: number): void {
        this.stack1.push(value);
    }

    dequeue(): number | undefined {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop()!);
            }
        }
        if (this.stack2.length === 0) {
            throw new Error("Queue is empty!");
        }
        return this.stack2.pop();
    }

    isEmpty(): boolean {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

const q = new QueueUsingStack();
console.log(q.isEmpty());
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue());

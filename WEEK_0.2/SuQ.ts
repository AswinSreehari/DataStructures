class StackUsingQueue {
    private queue1: number[];
    private queue2: number[];

    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(value: number): void {
         while (this.queue1.length > 0) {
            this.queue2.push(this.queue1.shift() as number);
        }
         this.queue1.push(value);
         while (this.queue2.length > 0) {
            this.queue1.push(this.queue2.shift() as number);
        }
    }

    isEmpty(): boolean {
        return this.queue1.length === 0;
    }

    pop(): number | undefined {
        if (!this.isEmpty()) {
            return this.queue1.shift();
        }
        throw new Error("Stack is empty");
    }

    peak(): number | undefined {
        return this.queue1[0];
    }
}

const s = new StackUsingQueue();

console.log(s.isEmpty());  
s.push(1);
s.push(2);
s.push(3);
s.push(4);
console.log(s.pop());  

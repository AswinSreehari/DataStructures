class Queue {
    item: number[];

    constructor() {
        this.item = [];
    }

    enqueue(element: number): void {
        this.item.push(element);
    }

    dequeue(): number | undefined {
        return this.item.shift();
    }

    peak(): number | undefined {
        return this.item[0];
    }

    isEmpty(): boolean {
        return this.item.length === 0;
    }

    size(): number | null {
        if (!this.isEmpty()) {
            return this.item.length;
        }
        return null;
    }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.dequeue();
console.log(queue.size());

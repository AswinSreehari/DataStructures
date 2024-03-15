class MaxHeap {
    heap: number[];

    constructor() {
        this.heap = [];
    }

    insert(val: number): void {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp(): void {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    deleteMax(): number {
        const max = this.heap[0];
        const end = this.heap.pop()!;
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown(): void {
        let index = 0;
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let largest = index;
            let leftChild = this.heap[leftChildIndex];
            let rightChild = this.heap[rightChildIndex];

            if (leftChild > this.heap[largest]) {
                largest = leftChildIndex;
            }
            if (rightChild > this.heap[largest]) {
                largest = rightChildIndex;
            }
            if (largest !== index) {
                [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];
                index = largest;
            } else {
                break;
            }
        }
    }

    getMax(): number {
        return this.heap[0];
    }
}

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);
maxHeap.insert(15);

console.log(maxHeap.getMax()); // 20
console.log(maxHeap.deleteMax()); // 20
console.log(maxHeap.getMax()); // 15

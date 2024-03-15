// PriorityQueue_Implementation_!
class QueueElement {
  element: any;
  priority: number;
 
  constructor(element: any, priority: number) {
       this.element = element;
       this.priority = priority;
  }
 }
 
 class PriorityQueue {
  queueItems: QueueElement[];
 
  constructor() {
       this.queueItems = [];
  }
 
  enqueueFunction(element: any, priority: number): void {
       let queueElement = new QueueElement(element, priority);
       let contain = false;
 
       for (let i = 0; i < this.queueItems.length; i++) {
           if (this.queueItems[i].priority > queueElement.priority) {
               this.queueItems.splice(i, 0, queueElement);
               contain = true;
               break;
           }
       }
 
       if (!contain) {
           this.queueItems.push(queueElement);
       }
  }
 
  dequeueFunction(): QueueElement | string {
       if (this.isPriorityQueueEmpty()) {
           return 'No elements present in Queue';
       }
       return this.queueItems.shift()!;
  }
 
  front(): QueueElement | string {
       if (this.isPriorityQueueEmpty()) {
           return 'No elements present in Queue';
       }
       return this.queueItems[0];
  }
 
  rear(): QueueElement | string {
       if (this.isPriorityQueueEmpty()) {
           return 'No elements present in Queue';
       }
       return this.queueItems[this.queueItems.length - 1];
  }
 
  isPriorityQueueEmpty(): boolean {
       return this.queueItems.length === 0;
  }
 
  printPriorityQueue(): string {
       let queueString = '';
       for (let i = 0; i < this.queueItems.length; i++)
           queueString += this.queueItems[i].element + ' ';
       return queueString;
  }
 }
 
 // Problem 1: Find the Shortest Path Between Two Nodes
 function dijkstra(graph: Record<string, Record<string, number>>, start: string, end: string): string | null {
  const queue = new PriorityQueue();
  const distances: Record<string, number> = {};
  const prev: Record<string, string | null> = {};
  let path: string[] = [];
  let smallest: string | null;
 
  for (let vertex in graph) {
       if (vertex === start) {
           distances[vertex] = 0;
           queue.enqueueFunction(vertex, 0);
       } else {
           distances[vertex] = Infinity;
           queue.enqueueFunction(vertex, Infinity);
       }
       prev[vertex] = null;
  }
 
  while (!queue.isPriorityQueueEmpty()) {
       const dequeued = queue.dequeueFunction();
       if (typeof dequeued === 'string') {
           console.error(dequeued);
           break;
       }
       smallest = dequeued.element;
       if (smallest === end) {
           while (smallest) {
               path.push(smallest);
               smallest = prev[smallest];
           }
           return path.reverse().join(' -> ');
       }
       if (!smallest || distances[smallest] === Infinity) continue;
       for (let neighbor in graph[smallest]) {
           let altPath = distances[smallest] + graph[smallest][neighbor];
           if (altPath < distances[neighbor]) {
               distances[neighbor] = altPath;
               prev[neighbor] = smallest;
               queue.enqueueFunction(neighbor, altPath);
           }
       }
  }
  return null;
 }
 
 const graph: Record<string, Record<string, number>> = {
  start: { A: 5, B: 2 },
  A: { C: 4, D: 2 },
  B: { A: 8, D: 7 },
  C: { D: 6, end: 3 },
  D: { end: 1 },
  end: {}
 };
 
 // Running Problem 1
 console.log(dijkstra(graph, 'start', 'end')); //start -> B -> D -> end
 
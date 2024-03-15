interface ObjectWithKey {
    [key: string]: any;
}

function heapSortObjects(arr: ObjectWithKey[], key: string): void {
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapifyObjects(arr, n, i, key);
    }

    for (let i = n - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapifyObjects(arr, i, 0, key);
    }
}

function heapifyObjects(arr: ObjectWithKey[], n: number, i: number, key: string): void {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left][key] > arr[largest][key]) {
        largest = left;
    }

    if (right < n && arr[right][key] > arr[largest][key]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapifyObjects(arr, n, largest, key);
    }
}

const arrObjects: ObjectWithKey[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 },
    { name: "Dana", age: 35 },
    { name: "Eve", age: 28 },
];
heapSortObjects(arrObjects, "age");
console.log(arrObjects); //[{name: "Charlie", age: 22}, {name: "Alice", age: 25}, {name: "Eve", age: 28}, {name: "Bob", age: 30}, {name: "Dana", age: 35}]

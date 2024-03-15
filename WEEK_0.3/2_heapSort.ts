function heapSortStrings(arr: string[]): void {
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapifyStrings(arr, n, i);
    }

    for (let i = n - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapifyStrings(arr, i, 0);
    }
}

function heapifyStrings(arr: string[], n: number, i: number): void {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapifyStrings(arr, n, largest);
    }
}

const arrStrings: string[] = ["apple", "banana", "cherry", "date", "elderberry"];
heapSortStrings(arrStrings);
console.log(arrStrings); //["apple", "banana", "cherry", "date", "elderberry"]

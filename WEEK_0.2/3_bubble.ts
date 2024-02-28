const bubbleSort = (arr: number[]): number[] => {
    let isSorted: boolean;
    do {
        isSorted = false;
        for (let i =  0; i < arr.length -  1; i++) {
            if (arr[i] > arr[i +  1]) {
                let temp = arr[i];
                arr[i] = arr[i +  1];
                arr[i +  1] = temp;
                isSorted = true;
            }
        }
    } while (isSorted);
    return arr;
};
const arr: number[] = [1.5,  3.2,  0.7,  2.8,  1.9];
console.log(bubbleSort(arr));